// Cloudflare Pages middleware: send visitors in Vietnam to /vi.
// Deploy from the repo root with `wrangler pages deploy site` so this
// functions/ directory is picked up alongside the site/ output.
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const country = request.cf && request.cf.country;

  // Keep /vi and /en without a trailing slash so the page's relative links resolve.
  if (url.pathname === '/vi/' || url.pathname === '/en/') {
    return Response.redirect(url.origin + url.pathname.slice(0, -1) + url.search, 301);
  }

  if (url.pathname === '/' && country === 'VN' && !url.searchParams.has('lang')) {
    return Response.redirect(url.origin + '/vi', 302);
  }

  return next();
}
