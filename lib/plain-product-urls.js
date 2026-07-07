/** URL slugs for plain packaging product pages. */

export function slugifyPlainProductName(name) {
  if (!name) return 'product';
  return (
    String(name)
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[-\s]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 72) || 'product'
  );
}

export function getPlainProductSlug(product) {
  const id = String(product?.id || '').trim();
  const nameSlug = slugifyPlainProductName(product?.name);
  if (!id) return nameSlug;
  return `${nameSlug}-${id}`;
}

export function getPlainProductPath(product) {
  return `/plain-packaging/${getPlainProductSlug(product)}`;
}
