# Sitemap & robots.txt – Google Search Console

This README explains how sitemap and robots work on this site and **when to update them** after adding new pages.

---

## Do you need another sitemap or robots.txt?

**Short answer:** You do **not** need to create a *new* sitemap or a *new* robots.txt. You only need to **keep the existing sitemap up to date** when you add public pages.

| File | What to do when you add pages |
|------|------------------------------|
| **robots.txt** | Usually **no change**. It already allows crawling and points to your sitemap. Only change it if you add a different sitemap URL (e.g. a sitemap index) or want to block new paths. |
| **Sitemap** | **Update** the sitemap so it includes the new pages. On this project the sitemap is dynamic but has a **static list** of pages—add new ones there. |

---

## Where things live

| Item | Location |
|------|----------|
| **robots.txt** | `public/robots.txt` (served at `https://printnpack.ie/robots.txt`) |
| **Sitemap** | `pages/sitemap.xml.js` (served at `https://printnpack.ie/sitemap.xml`) |

The sitemap is generated at request time. It includes:

1. **Static pages** – Listed in the `staticPages` array in `pages/sitemap.xml.js` (home, products, about, contact, blog posts, service pages, etc.).
2. **Product pages** – From `data/products.js` (each product slug → `/products/{slug}`).
3. **Plain packaging pages** – From `data/plain-products-tiered.js` (each id → `/plain-packaging/{id}`).

---

## When you add new pages: update the sitemap

- **New product or plain-packaging page**  
  If it comes from `data/products.js` or `data/plain-products-tiered.js`, it is already included in the sitemap. No code change needed.

- **New static page (e.g. new blog post or new service page)**  
  Add it to the `staticPages` array in `pages/sitemap.xml.js`:

  ```js
  { path: '/blog/your-new-blog-slug', priority: '0.8', changefreq: 'monthly' },
  ```

  Use the same pattern for other routes (e.g. `/services/…`). Then deploy so `https://printnpack.ie/sitemap.xml` reflects the new URLs.

You do **not** need to create a second sitemap file; one sitemap is enough unless you have many thousands of URLs (then you’d use a sitemap index).

---

## Submitting to Google Search Console

1. **Add the property** (if not already): [Google Search Console](https://search.google.com/search-console) → add property for `https://printnpack.ie`.

2. **Submit the sitemap**  
   - **Sitemaps** in the left menu → enter: `sitemap.xml` (or full URL `https://printnpack.ie/sitemap.xml`).  
   - Google will fetch it from the URL. No need to upload a file.

3. **After adding new pages**  
   - Ensure the new URLs are in the sitemap (see above) and deploy.  
   - In Search Console you can optionally use **URL Inspection** → “Request indexing” for important new URLs.  
   - Google will re-crawl the sitemap periodically; you don’t need to “resubmit” the sitemap each time.

4. **robots.txt**  
   - Your `public/robots.txt` already allows `User-agent: *` and `Allow: /`, and has `Sitemap: https://printnpack.ie/sitemap.xml`.  
   - No change needed when you add new public pages.

---

## Summary

- **No new sitemap or robots.txt** when you add pages.
- **Update** `pages/sitemap.xml.js` (add new static/blog/service URLs to `staticPages`) when you add new public pages that aren’t products or plain-packaging.
- **Submit** the sitemap once in Google Search Console; then keep the sitemap up to date and deploy. Optionally use URL Inspection to request indexing for key new pages.
