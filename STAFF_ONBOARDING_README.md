# Staff Onboarding – Privacy / Legal Disclaimer

The Privacy (Legal disclaimer) question **already exists** in staff onboarding. We need one change: **staff must not be allowed to answer No and proceed** — only **Yes** allows them to continue. Existing staff are not affected. Admins do not have this onboarding.

---

## What we're changing

1. **Onboarding (staff only)**  
   The onboarding flow already asks something like “Do you comply with the Privacy Policy?” (or Legal disclaimer). Today staff can click **No**.  
   **Change:** Staff **cannot** proceed if they select **No**. Only **Yes** lets them continue. No skip, no “Remind me later” — they must answer **Yes** to complete onboarding.

2. **Existing staff**  
   **No change.** Staff who are already on the system are not affected. We do not add new steps for them, and we do not force them through onboarding again.

3. **Admin Panel – Section 1: Legal Disclaimers**  
   In the Admin Panel, in the staff detail (edit staff) screen, there is **Section 1: Legal Disclaimers**. The admin can **edit** this section and set/change the value (e.g. set to Yes) for any staff. So if an existing staff member never saw the question or it wasn’t recorded, the admin can set it here.

4. **Admins**  
   **Admins do not have this onboarding.** They are exempt. Only staff see the Privacy / Legal disclaimer step. Admins do not need to accept it.

---

## When user selects No

If the user selects **No**, they **cannot proceed** with onboarding. Show the following and give them three options.

**Message to display:**

> You must accept the Privacy Policy to use the system.  
> Please review the policy or contact your administrator.

**Actions to offer:**

| Action | Behaviour |
|--------|-----------|
| **Logout** | Log the user out and return them to the login page (or equivalent). |
| **View policy** | Link that opens the Privacy Policy (e.g. in a new tab or same window) so they can review it. |
| **Retry** | Let them stay on the step and change their answer to **Yes**, then continue. No need to leave the page. |

They remain on the onboarding step until they either choose **Yes** and continue, or **Logout**. The **View policy** link is for review only; it does not complete the step.

---

## Summary

| What | Detail |
|------|--------|
| Who sees the question? | **Staff** only (in onboarding). Not admins. |
| Can they answer No and proceed? | **No.** Only **Yes** allows them to proceed. When they select No, show the message and offer **Logout**, **View policy**, **Retry**. |
| Can they skip? | **No.** They must answer; only Yes continues. |
| Existing staff? | **Not affected.** No new steps. Admin can set Legal disclaimer in Section 1 in staff detail if needed. |
| Admins? | **Exempt.** They don’t have this onboarding. |
| Where can admin set it for staff? | **Admin Panel → Staff detail → Section 1: Legal Disclaimers.** |

---

## Race conditions and potential issues

Things that could go wrong and how to avoid or handle them:

### Race conditions

1. **Double-submit / double-click**  
   Staff clicks “Continue” twice quickly with “Yes” selected; two requests hit the server. Risk: duplicate completion, or inconsistent state.  
   **Mitigation:** Make the completion step **idempotent**. If the user has already completed this step (or onboarding), return success and redirect to the next step or dashboard; do not apply the same change twice. Use a single “onboarding completed” or “legal disclaimer accepted at” so the second request is a no-op.

2. **Multiple tabs or devices**  
   Staff has onboarding open in two tabs (or web + phone). They submit “Yes” in one tab; the other still shows the form. If they submit again from the other tab, or the other tab has stale state, they may see errors or duplicate submissions.  
   **Mitigation:** After successful submit, redirect away and/or set a flag so any other tab sees “already completed” and redirects. Optionally disable the form or show “Already completed” if they land on the step again.

3. **Admin editing Section 1 while staff is in onboarding**  
   Admin is editing Section 1: Legal Disclaimers for a staff at the same time that staff is submitting “Yes” in onboarding. Depending on how the backend works, one update could overwrite the other (e.g. admin saves after staff, or vice versa).  
   **Mitigation:** Usually low impact if both are setting “accepted” / Yes. If admin can set to “No” or clear the value, avoid overwriting a more recent “Yes” from onboarding (e.g. last-write-wins with a timestamp, or treat “Yes” from onboarding as authoritative once set). Document whether admin can revoke (set back to No) and what that means for the staff account.

4. **Role or status change mid-flow**  
   Staff is on the Legal disclaimer step; before they submit, an admin deactivates them or changes their role. When they click “Continue”, the request may fail or behave oddly.  
   **Mitigation:** On submit, re-check role and active status. If they are no longer staff or are deactivated, return a clear error and redirect to login or an “account disabled” page. Do not partially complete onboarding for an invalid state.

### Other potential issues

5. **Validation only on the client**  
   If “Continue” is only disabled when “No” is selected in the UI, a user can bypass (e.g. browser dev tools, or calling the API directly) and submit with “No”.  
   **Mitigation:** **Always validate on the server.** Reject or ignore any onboarding completion where the Legal disclaimer / Privacy answer is not “Yes”. Do not rely on the front end alone.

6. **Back button after completing**  
   Staff submits “Yes”, moves to the next step, then hits the browser back button. They see the Legal disclaimer step again. If they change to “No” and try “Continue”, the server should still reject. If they leave it as “Yes” and submit again, treat as idempotent (see 1).  
   **Mitigation:** Server treats “already completed” as success; no duplicate side effects. Optionally, when loading the onboarding step, if this step is already completed, redirect to next step or dashboard.

7. **Existing staff if you later enforce “must have Yes”**  
   Right now we don’t change existing staff. If you later add a check that blocks access (e.g. “staff must have Legal disclaimer = Yes to use the app”), existing staff who never had it set could lose access until an admin sets Section 1 for them.  
   **Mitigation:** If you introduce such a check later, either: (a) treat “not set” as allowed for staff created before that check, or (b) run a one-time step to set Section 1 for existing staff, or (c) communicate that admins must set it in the panel. Document the decision.

8. **Admin clears or sets to “No”**  
   If the admin can clear Section 1 or set it to “No”, does that lock the staff out of anything? Today we only block at onboarding. If you ever gate access on this value, clearing it could lock them out.  
   **Mitigation:** Decide and document: can admin revoke? If yes, what happens (e.g. staff must re-accept, or lose access until admin sets Yes again). If no, consider making the field “set once” or only allow changing from unset → Yes, not Yes → No.

9. **Network or server error after “Yes”**  
   Staff selects “Yes” and clicks “Continue”; the request fails (network error, 500). They don’t know if it saved. If they retry, ensure idempotency (see 1). If the backend saved but the response was lost, a refresh or retry should show “already completed” and not ask again.  
   **Mitigation:** Idempotent completion; clear success/error messaging; optional “If you already submitted, go to dashboard” link on error.

10. **Stale or cached onboarding page**  
    Staff completed onboarding (with Yes) but a cached version of the page or an old session shows the onboarding again.  
    **Mitigation:** When loading onboarding, check server-side whether they have already completed it; if yes, redirect to dashboard (or next step). Avoid relying only on client-side state.

---

## Implementation (short)

- **Onboarding UI:** Disable or reject “Continue” / “Next” when the Legal disclaimer / Privacy answer is **No**. Only enable or accept when the answer is **Yes**. If they choose No, show a message (e.g. “You must agree to the Legal disclaimer to continue”) and show the exact message and actions from the "When user selects No" section above (message + Logout, View policy link, Retry). Keep them on the step.
- **Back end:** If the onboarding submit includes this answer, reject or ignore when it’s No; only persist and complete onboarding when it’s Yes.
- **Existing staff:** No middleware change needed for “already onboarded” — they’re already in. Admin can edit **Section 1: Legal Disclaimers** in the staff detail screen to set the value for any staff.
- **Admins:** Ensure the Privacy / Legal disclaimer step is only shown for **staff** (e.g. by role); admins never see it.

This README describes the change required: staff cannot answer No and proceed; only Yes. Existing staff unaffected; admin can edit Section 1: Legal Disclaimers. Admins exempt.
