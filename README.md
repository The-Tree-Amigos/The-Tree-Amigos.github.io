# The Tree Amigos website

Landing page for The Tree Amigos, tree care from Ogden to Salt Lake City. Live at https://treeamigosutah.com, served by GitHub Pages.

## Structure

```
index.html              The whole page: content, meta tags, structured data, icon sprite
css/styles.css          Styles (mobile-first)
js/main.js              Mobile menu toggle
images/
  hero-420.webp         Hero photo, two sizes
  hero-690.webp
  logo.webp             Full logo, transparent background
  mark.webp             Round logo crop used in the header and footer
  favicon.png           192px icon
  apple-touch-icon.png  iOS home-screen icon
  og-image.jpg          Link preview image (1200x630)
favicon.ico
robots.txt, sitemap.xml
CNAME                   Custom domain for GitHub Pages
docs/                   Original brief and the old Google Site, for reference
```

## Editing content

Everything visible on the page is plain HTML in `index.html`. There is no build step: edit, commit, push.

The phone number, email, hours and social links appear in several places (header, hero, contact section, footer, mobile call bar, and the JSON-LD block in `<head>`). Search `index.html` for the old value and replace every occurrence.

If you add a section, add it to both the header nav and the footer "Explore" list.

## Estimate form

The contact section embeds a Google Form. Edit questions, the confirmation message and the theme colour in Google Forms. The iframe has a fixed height in `css/styles.css` (`.estimate-form`) because embedded forms can't resize themselves; if the form gets longer, raise those heights.

## Images

Images are WebP, sized for where they're shown. To replace one, export it at the same pixel size (or larger, then resize) and convert, for example:

```
cwebp -q 80 photo.png -o images/hero-690.webp
```

The original full-resolution `logo.png` and `hero-tree-care.png` are in git history (commit `b581791`).

## Deployment

GitHub Pages serves the `main` branch from the repository root. `CNAME` holds `treeamigosutah.com`; DNS is configured at the domain registrar. Keep "Enforce HTTPS" on in the repository's Pages settings.

## Checks before shipping

- Page works with JavaScript turned off.
- Phone and email links open the dialer and mail app.
- Looks right on a phone (375px wide) and on desktop.
- Structured data passes https://search.google.com/test/rich-results.

## Credits

Icons from [Lucide](https://lucide.dev) (ISC licence). Fonts: Fraunces and Figtree via Google Fonts.
