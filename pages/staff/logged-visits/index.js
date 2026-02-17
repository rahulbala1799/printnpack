import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import StaffLayout from '../../../components/staff/StaffLayout';

function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function timeAgo(d) {
  if (!d) return '';
  const diff = Date.now() - new Date(d).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days === 1) return 'yesterday';
  return `${days}d ago`;
}

export default function LoggedVisitsPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/staff/login');
          return;
        }
        const data = await res.json();
        if (data.user?.role !== 'staff' && data.user?.role !== 'admin') {
          router.replace('/staff/login');
          return;
        }
        if (data.user?.role === 'staff' && data.user.must_change_password) {
          router.replace('/staff/change-password');
          return;
        }
        setUser(data.user);
      } catch {
        router.replace('/staff/login');
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  useEffect(() => {
    if (!user) return;
    fetch('/api/staff/outbound-visits', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : { leads: [] }))
      .then((data) => setLeads(data.leads || []))
      .catch(() => setLeads([]));
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" aria-hidden />
      </div>
    );
  }

  return (
    <StaffLayout user={user} title="Logged Visits">
      <Head>
        <title>Logged Visits — Staff — PrintNPack</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="max-w-lg mx-auto space-y-4">
        <p className="text-slate-600 text-sm">
          Visits you&apos;ve logged appear here and in the Admin lead pipeline.
        </p>

        {leads.length === 0 ? (
          <div className="text-center py-12 rounded-xl border border-dashed border-slate-200 bg-slate-50/50">
            <div className="text-4xl mb-3 opacity-50">🗺️</div>
            <p className="text-slate-600 font-medium">No logged visits yet</p>
            <p className="text-slate-500 text-sm mt-1">Log a visit from Outbound Sales to see it here.</p>
            <Link
              href="/staff/outbound-sales"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700"
            >
              Log a visit →
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {leads.map((lead) => {
              const p = lead.payload || {};
              const visits = Array.isArray(p.visits) ? p.visits : [p];
              const first = visits[0] || {};
              const lastUpdated = lead.updated_at;
              return (
                <li
                  key={lead.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-slate-900 truncate">{lead.name}</p>
                        <p className="text-sm text-slate-500 truncate mt-0.5">{lead.company || first.displayAddress}</p>
                      </div>
                      <span className="text-xs text-slate-400 shrink-0">{timeAgo(lastUpdated)}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {first.metOwnerOrKdm && (
                        <>
                          {first.interested === 'yes' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Interested</span>
                          )}
                          {first.interested === 'no' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">Not interested</span>
                          )}
                          {first.interested === 'follow-up' && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">Follow-up</span>
                          )}
                        </>
                      )}
                      {first.metOwnerOrKdm === false && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {first.leafletOrMaterialDropped ? 'Leaflet left' : 'No leaflet'}
                        </span>
                      )}
                      {visits.length > 1 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          {visits.length} visits
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="pt-2">
          <Link
            href="/staff/outbound-sales"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:underline"
          >
            ← Back to Log a visit
          </Link>
        </div>
      </div>
    </StaffLayout>
  );
}
