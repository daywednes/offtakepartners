# Offtake Partners — website

One-page bilingual (EN / VI) static site for Offtake Partners (legal entity: VN Materials Partners Pte. Ltd.). Domain: offtakepartners.com. No framework, no build step.

```
site/
  index.html    page markup (English copy in the HTML; Vietnamese is swapped in by app.js)
  styles.css    all styling, light + dark via prefers-color-scheme
  app.js        language toggle, persistence, <html lang> / title / hreflang handling
  favicon.svg   geometric mark
  og.png        1200×630 social preview image
  robots.txt
  _redirects    Netlify: sends visitors in Vietnam to /vi, serves /vi and /en as the same page
functions/
  _middleware.js  Cloudflare Pages: same country redirect (used only when deploying with Wrangler)
```

You can also open `site/index.html` directly in a browser to preview it.

## Deploy

The `site/` folder is the publish directory. Nothing to build.

**Netlify (drag and drop)**
1. Open https://app.netlify.com/drop
2. Drag the `site/` folder onto the page.

**Netlify (CLI)**
```
npm i -g netlify-cli
netlify deploy --dir=site --prod
```

**Cloudflare Pages**

Deploy from this folder with Wrangler so the `functions/` directory (country detection) is included:
```
npm i -g wrangler
wrangler login
wrangler pages deploy site --project-name offtake-partners
```
Git integration also works: build command empty, output directory `site`. Dashboard drag-and-drop uploads the page fine but does not include `functions/`, so the country redirect would be missing there.

Both hosts add HTTPS, gzip/brotli and cache headers automatically. Point the custom domain at the host afterwards.

## Fill in the placeholders

Every unfinished item is wrapped in `<span class="todo">` and contains `[●]`. Search for `●` in both `site/index.html` and `site/app.js` (the Vietnamese strings live in app.js). Current placeholders:

| Where | index.html | app.js key |
|---|---|---|
| Contact email | Contact section: the visible text **and** the `href="mailto:[●]"` | `contact.email` (en + vi) |
| UEN | Footer | — (not translated; edit the HTML only) |

The canonical, hreflang and social-preview URLs in the `<head>` of `index.html` point at `https://offtakepartners.com/`. Change them if the domain changes.

When a placeholder is filled, remove its `class="todo"` so the amber highlight disappears.

## Edit copy

- **English** is the text inside each element carrying a `data-i18n="..."` attribute in `index.html`. It is also duplicated in the `en` block of `app.js`. Change both, or the toggle will revert the HTML text to the app.js version.
- **Vietnamese** lives only in the `vi` block of `app.js`.
- Keys are the same in both blocks, e.g. `why.2`, `how.3`, `process.1`, `sectors.1.note`, `team.1.bio`, `footer.b`.
- The page `<title>` and `meta description` are the `title` and `description` keys.
- Keep the footer disclaimer (`footer.a`, `footer.b`) exactly as approved.

Nothing else on the page is generated; what you see in the HTML is what ships.

## Team photos (optional)

Each team entry has an empty 56×56 square (`<div class="avatar" aria-hidden="true"></div>`). To add a photo, put a square image in `site/` and replace the div with:

```html
<div class="avatar"><img src="minh.jpg" alt="" width="56" height="56"></div>
```

Delete the div entirely if you prefer no image slot.

## Language behaviour

**By location.** The host looks at the visitor's country from their IP address. Visitors in Vietnam are redirected from `/` to `/vi`, which is the same page showing Vietnamese. Everyone else stays on `/` and sees English.

- Netlify does this with the `Country=vn` rule in `site/_redirects`. It works for drag-and-drop, CLI and Git deploys.
- Cloudflare Pages does this with `functions/_middleware.js`, using the country Cloudflare attaches to each request. It needs a Wrangler or Git deploy (see above).
- Any other static host, or a local preview, skips this step and falls through to the browser-language rule below.

**Order of precedence** when the page loads:

1. `?lang=vi` or `?lang=en` in the URL.
2. A choice the visitor made with the EN | VI toggle, saved in `localStorage` under `offtake-lang`. So someone in Vietnam who picks English keeps English on later visits, and vice versa.
3. The country redirect (`/vi` → Vietnamese).
4. The browser's language: Vietnamese if it is `vi`, otherwise English.

With JavaScript disabled, the page shows English.

Country detection cannot be tested on a laptop. After deploying, check it with a VPN set to Vietnam, or with `curl -I https://your-domain/` from a server in Vietnam and look for `location: /vi`.

## Verifying after edits

Run Lighthouse in Chrome DevTools (or `npx lighthouse <url>`). Last measured on the published folder: performance 99 / 100 (mobile / desktop), accessibility 100, SEO 100.

Re-check that none of these strings appear in `index.html` or `app.js`: "invest now", "raising", "returns", "IRR", "%", "fund size", "open", "apply", "subscribe", "form", and the noun "fund" (whole words; "information" in the disclaimer, "Former" in the founder bio and "funded programme" are the only substring matches). The page describes a firm that invests, never a fund being offered.
