# Offtake Capital — website

One-page static site for Offtake Capital. Domain: offtakecap.com. English only. No framework, no build step, no JavaScript.

```
site/
  index.html    page markup and all copy
  styles.css    all styling; brand colours are CSS variables at the top
  favicon.svg   text-free mark in navy and clay
  og.png        1200×630 social preview image
  CNAME         custom domain for GitHub Pages (offtakecap.com)
  robots.txt
  .nojekyll
```

Open `site/index.html` in a browser to preview it.

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml`, which publishes the `site/` folder to GitHub Pages. Nothing to build.

`site/CNAME` tells GitHub Pages to serve the site at offtakecap.com. The domain's DNS must point at GitHub Pages for that to work.

## Placeholder

The footer contains `Company registration: [●]`. Replace `[●]` in `site/index.html` when the number is available.

## Editing copy

All copy is plain text in `site/index.html`. The canonical and social-preview URLs in the `<head>` point at `https://offtakecap.com/`.

If the hero headline or sub-line changes, regenerate `site/og.png` so the social preview matches.

## Content rules

The page describes the firm. It is not an offering page. Before publishing an edit, check that it adds none of the following: figures for investor gains or targets, fund size, closing dates, ticket sizes, fees, an investment form, or any call to action other than the mailto link. Do not name government officials or agencies as partners. Every source is a link on short label text; never show a bare URL.

## Colour contrast

Small text needs a contrast ratio of at least 4.5:1. The brand clay (`#B5552D`) and moss (`#2F7D6B`) fall short of that on some backgrounds, so `styles.css` defines three same-hue tones for small labels: `--clay-text`, `--clay-text-on-navy` and `--moss-text-on-navy`. Use those for small text; use `--clay` and `--moss` for fills and for labels on off-white cards.

## Verifying after edits

Run Lighthouse (`npx lighthouse <url>`). Last measured locally: accessibility 100, best practices 100, SEO 100, performance 91 mobile / 98 desktop. Check the page at 375px and 1440px wide for horizontal scroll.
