# Site Fixes Plan

## September 2026 — "Funfair Workshop" Design Pass

Completed after the content pass (2026-09-26):

- [x] Brand identity: new `css/theme.scss` — cream paper background, navy ink, castle-red links, mango-yellow accents, chunky pill buttons with offset "comic" shadows, dashed stitch motifs, self-hosted Fredoka One (headings) + Nunito (body) from Bunny Fonts in `assets/fonts/`
- [x] Logo from the image dump in use: circular crop of the official badge (transparent PNG) as the header lockup (`_includes/navigation-start.html`) — badge + wordmark + "Repairs & PIPA Testing" tagline — and in the footer
- [x] Branded 1200×630 og-image (finished castle photo + badge) set on the home page for social shares
- [x] Home page: parallax hero, "Inspected, Certified & Connected" logo marquee (PIPA, TIPE, Ellis Leisure, our badge), big red Fredoka stat numerals
- [x] New footer: circular logo, Explore / Get in touch columns, towns-served line, round gold socials
- [x] Right sidebar restyled as a bordered card with compact contact list and small badges
- [x] Links page logos padded onto uniform 3:2 white canvases (`*-logo-card.png`) so nothing crops
- [x] Detailed visual verification via headless-browser screenshots reviewed by the vision model — fixed as-found: nav logo img sizing (CSS specificity vs `.design-system img`), visited-link colours, dark-section heading/card contrast (theme-colour vars instead of hardcoded ink), stats value typography, footer alignment + socials
- [x] Fixed prep bug: `repo/_site` output was being re-copied into the dev tree and breaking subsequent local builds (`_site` added to rootExcludes)

Design notes: reveal-on-scroll animations are WAAPI-driven, so full-page screenshot captures with forced CSS can still show blank sections — verified live instead by scroll-through captures. Marquee animates client-side (promo logos sit left until JS runs).

## September 2026 — Images, Gallery, Reviews & Template Migration
Completed in this session (2026-09-26):

- [x] Described all 107 photos from Harry's "Stefan Essex web" zip with the vision model — catalog saved at `info/image-descriptions.json`
- [x] Selected ~20 of the best photos, copied into `images/` with clean names (hero, before/after composites, blower servicing, stakes, workshop shots, finished inflatables)
- [x] Downloaded the official Ellis Leisure logo from ellisleisure.co.uk → `images/ellis-leisure-logo.png` and swapped it for the banner on the Links page
- [x] Saved an Essex Inflatables logo variant → `images/essex-inflatables-logo.png` (unused for now, kept for future branding)
- [x] New **Repair Gallery** page at `/gallery/` (`pages/gallery.md`) — 14 before/after and workshop photos with captions, in nav between Repairs and News; linked from home, repairs page and footer
- [x] Home page: new `image-background` hero (workshop photo) with trade-facing opening message and two CTAs; real photography on the inspections/repairs splits; a "Recent Repairs" gallery teaser; a "Why Operators Trust Essex Inflatables" trust block linking to **Facebook reviews**
- [x] Facebook reviews links (home trust block, sidebar, footer) pointing at the page's `/reviews/` URL
- [x] Repairs page: real photos on the facility and process splits, a new **Blower & Fan Maintenance** split with the clogged-impeller before shot, gallery callout, headline CTA
- [x] PIPA page: scope list updated against pipa.org.uk (ball pits and toddler play zones added to the scheme from March 2026; non ride-on games in scope; out-of-scope equipment still inspected in-house as a competent person), link to PIPA's scope page, and a **contact form** ("Book Your PIPA Inspection")
- [x] News article retitled (**"Our New Website Is Live!"**), proper meta title/description, images added, contact details aligned with the rest of the site
- [x] Removed the "(changing soon)" hedge from the mobile number — confirm the number is current
- [x] Emergency call-out wording rewritten everywhere (repairs page + FAQ): phone-ahead priority workshop repairs, no longer implies mobile call-out
- [x] SEO: location keywords woven into meta descriptions and copy — Benfleet, Hullbridge, Southend, Basildon, Rayleigh, Chelmsford, Romford, Brentwood, London; footer now lists the towns served
- [x] Nav orders renumbered to fit Gallery (Home → Services → PIPA → Repairs → Gallery → News → HSE → FAQ → Links → Contact)
- [x] Fixed a genuine broken-link bug: every page linked `/hse-best-practices/` but the permalink was `/hse-best-practice/` — permalink now matches the links, old URL redirects
- [x] Migrated all content to the **current chobble-template schema** (the template changed in June 2026 after the site's last build — the site no longer built at all):
  - `layout: design-system-base.html` removed everywhere (template default is now `base.html`)
  - block key renames: `intro` → `intro_content`, callout `title` → `name`, features/image-cards items `title` → `name`, split-* `title` folded into `content` as `##` heading, split-full `left_title`/`right_title` folded into content, cta `title`+`description` → `content`, contact-form `header_intro` → `intro_content`
  - every page/product/category now has the required `name` field
  - news items require `name`; article updated accordingly
- [x] `scripts/prepare-dev.js`: excluded the new `info/` working folder, `PLAN.md` and `QUESTIONS.md` from the build sync (they broke the build)
- [x] Same exclusions added to the GitHub deploy workflow; `info/` gitignored so the 1GB zip never lands in the repo
- [x] Full local build verified green (template validated, 38 pages, internal link check passed)

## Earlier — Done

Applied in earlier commits:

- [x] "Holbridge" → "Hullbridge" everywhere (home, repairs, contact, repair service card)
- [x] Pre-examination fee £25 → £30 everywhere (repairs, services, FAQ already £30)
- [x] Fan repairs and repair materials moved under Repair Services (off the Spare Parts page)
- [x] PIPA logo link on `snippets/right-content.md` → https://www.pipa.org.uk/ (confirmed live)
- [x] PIPA logo + link added on the Links page
- [x] Services page restructured as a gateway page with image cards and CTAs
- [x] Footer strengthened (quick links, contact details, credentials)
- [x] "How it works" sections on Repairs and PIPA pages
- [x] Contact form added to Contact page (formspark + botpoison configured in site.json)

## Still Needs Input From You

- [ ] **Mobile number**: removed "(changing soon)" — confirm 07976 979727 is still the right number
- [ ] **Facebook reviews URL**: linked to the standard `/reviews/` page on the Facebook profile — confirm the page has reviews enabled there
- [ ] **News title**: set to "Our New Website Is Live!" — shout if you'd prefer something else
- [ ] **Workshop postcode**: contact page says "Hullbridge area (SS5)" — happy with that, or supply the full postcode if you want it published
- [ ] **New-keyword coverage**: current footer/copy names Benfleet, Hullbridge, Southend, Basildon, Rayleigh, Chelmsford, Romford, Brentwood + London/Kent/Herts/Surrey — tell us if there are towns you specifically want named
- [ ] **Reviews content**: currently a link-out to Facebook reviews; the template also supports embedding real quotes as a `reviews` collection if you want to send us some words from customers
- [ ] **More imagery**: ~80 further photos from the zip remain unused (catalog in `info/image-descriptions.json`) — plenty more before/after and workshop shots available if you want more sections illustrated
- [ ] **Mobile polish / text breakup**: editorial + CSS pass across pages, as before

## Notes

- The local build runs with `nix develop --impure --command bun run build` from the repo root (bun 1.3.13 via flake). One flaky Bun/sharp segfault was seen once during image processing — a clean retry succeeded.
- `info/` is gitignored: it holds the original photo dump, the zip, WhatsApp export and the description catalog. The photos we use have been copied into `images/`.
