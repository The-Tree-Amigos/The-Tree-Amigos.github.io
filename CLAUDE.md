# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page landing site for The Tree Amigos, a tree care company serving Ogden to Salt Lake City, Utah. Hosted on GitHub Pages at https://treeamigosutah.com (see `CNAME`). The page exists to rank in local search and turn visitors into phone calls or estimate requests.

## Architecture

- Static HTML, CSS and a few lines of JS. No build step, no package.json, no config file.
- **All content is written directly in `index.html`.** Crawlers and visitors with JS off must see every word, link and the structured data. Never move content into JS.
- `js/main.js` toggles the mobile menu and, after the estimate form submits, scrolls its confirmation back into view. Without JS the mobile nav falls back to a scrollable row of links (`html.no-js`; an inline script in `<head>` swaps it to `js`) and the header is two rows tall, so `.no-js [id]` gets a larger `scroll-margin-top`.
- `css/styles.css` is mobile-first. Tokens (palette from the logo, fonts, spacing) are on `:root`. Breakpoints: 480, 600, 900, 1024px.
- Fonts: Fraunces (headings) and Figtree (body) from Google Fonts.
- Icons: inline SVG sprite at the top of `<body>` (Lucide, ISC licence), used via `<svg class="icon"><use href="#i-name"/></svg>`.
- Estimate form: an embedded Google Form (`iframe.estimate-form`), lazy-loaded.

## Business facts

Only state facts from this list. Do not invent stats, years in business, reviews, names or credentials.

- ISA Certified Arborist on staff (singular; no certification number).
- Licensed & insured. Free estimates.
- Service area: Ogden to Salt Lake City.
- Phone (801) 228-0703 (`tel:+18012280703`), email info@treeamigosutah.com.
- Hours: Monday–Saturday, 7am–6pm.
- Services: pruning & trimming (incl. crown thinning/reduction), removal, stump grinding, planting, health assessments, disease & pest treatment, cabling & bracing, risk assessments & arborist reports.
- Instagram https://www.instagram.com/treeamigosutah/, Google Business Profile https://maps.app.goo.gl/Y5yyAq94NFY5wV8Z7.
- No team section, no personal names, no gallery, no testimonials (nothing real to put in them yet).
- Tree Easy is a separate business: no cross-links or shared branding.

Changing the phone, email, hours or links means editing every occurrence in `index.html`, including the JSON-LD block in `<head>`. Search for the old value.

## Content guidelines

- Voice: professional, knowledgeable, friendly. Plain language; no industry jargon in service names.
- Page title stays "The Tree Amigos - Professional Tree Care in Ogden & Salt Lake City". The H1 carries the keywords; the tagline "We'll cut you... any tree!" is the kicker above it.
- Semantic HTML, one H1, alt text on every meaningful image.

## Performance

- Target: under 2MB for the page itself. Currently about 0.25MB on first load.
- Images are WebP, sized for their display slot, with explicit `width`/`height`. Below-the-fold images use `loading="lazy"`; the hero uses `fetchpriority="high"`.
- The Google Form iframe pulls about 4.7MB from Google (mostly theme fonts) when it loads. It is `loading="lazy"`, so it only loads near the contact section.

## Gotchas

- The form's content is at least ~333px wide, so frames narrower than that (viewports under ~365px) scroll sideways inside the frame.
- The Google Form cannot resize its iframe. `.estimate-form` has a fixed height tall enough for the whole form (about 2170–2290px depending on width). If questions are added to the form, raise those heights or users get a scroll-inside-a-scroll.
- `images/logo.webp` has a transparent outer background, but the gaps between the figures are still the logo's cream. Only place it on a cream background.
- `TreeService` is not a schema.org type; the JSON-LD uses `HomeAndConstructionBusiness` (a `LocalBusiness` subtype).
- `docs/PRD.md` is the original brief and is out of date where it conflicts with this file. `docs/examples/index.html` is the old Google Site, kept for reference.

## Testing

No test suite. Before shipping a change, check by hand:

- The page renders fully with JavaScript disabled.
- `tel:` and `mailto:` links are correct everywhere.
- Layout at 375px wide and on desktop; no horizontal scroll.
- The JSON-LD block is valid JSON (Rich Results Test: https://search.google.com/test/rich-results).
