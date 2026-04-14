# Site Fixes Plan

## Easy Peasy — Done

Applied in commit on `claude/categorize-fixes-plan-XGYai`.

- [x] Change "Holbridge" to "Hullbridge" on the Home page (`pages/home.md`, Professional Repairs section)
- [x] Change "Holbridge" to "Hullbridge" on the Repair Service card (`categories/repairs.md`)
- [x] Change "Holbridge" to "Hullbridge" on the main Repairs page (`pages/repairs.md`)
- [x] Change "Holbridge" to "Hullbridge" on the Contact Us page (`pages/contact.md`)
- [x] Site-wide check: no remaining occurrences of "Holbridge" in content files
- [x] Update pre-examination fee from £25 to £30 on the Repair Service card (`categories/repairs.md`)
- [x] Update pre-examination service from £25 to £30 on the main Repairs page (`pages/repairs.md`)
- [x] Align pricing across pages — also updated `pages/services.md` from £25 to £30. FAQ (`pages/faq.md`) already said £30.
- [x] Move "fan repairs" and "repair materials" from Spare Parts → Repair Services: removed from `products/spare-parts.md` and from the bullet list in `categories/for-sale.md`; added a Repair Materials section and expanded Blower and Fan Maintenance wording on `pages/repairs.md`.
- [x] Add a link to the PIPA website on the side imagery on the Home page — `snippets/right-content.md` now wraps the PIPA logo in a link to https://www.pipa.org.uk/ (URL still to be confirmed — see Requires Web Research).
- [x] Add a PIPA logo on the Links page with a link to PIPA (`pages/links.md`, using existing `/images/pipa-logo.png`).
- [x] Add a contact form on the PIPA Testing page — `pages/pipa-inspections.md` now uses `layout: contact.html`, which the chobble-template renders with a contact form (plus FAQ and map).
- [x] Reduce overlap between PIPA Testing / PIPA Inspections — Services page PIPA section trimmed to a short summary linking to the full PIPA Inspections page.
- [x] Reduce overlap between Repair Services / Repairs — Services page Repairs section trimmed to a short summary linking to the full Repairs page.
- [x] Make the Services page a true summary / gateway page (`pages/services.md`).
- [x] Stronger calls to action across key pages — CTA blocks added to `pages/repairs.md` and `pages/pipa-inspections.md`; Services page and footer also surface direct contact details.
- [x] Strengthen footer with quick links / contact / credentials (`snippets/footer-content.md`).
- [x] Clearer "how it works" sections — `pages/repairs.md` already had "Our Repair Process"; `pages/pipa-inspections.md` now has a numbered "How It Works" section.
- [x] Add "blower and fan maintenance" as a sub-heading under Repair Services — added as a bullet in the left-hand Repair Services card (`categories/repairs.md`). `pages/repairs.md` also already has a "Blower and Fan Maintenance" heading. **⚠ Caveat:** if "left-hand side" means a literal sidebar sub-nav on the rendered site, the fix may instead want a dedicated page with `eleventyNavigation` nesting under Repairs — please confirm.

## Easy Peasy — Deferred

- [ ] Break up longer text sections on Repairs / PIPA / HSE pages — deferred as this benefits from an editorial pass rather than mechanical splits.
- [ ] Final mobile polish across all pages — deferred as this is CSS/layout work in the `chobble-template`, not a content change.

## Requires Input

These need clarification, decisions, or content from the user before they can be completed.

- [ ] **News page title**: which title needs updating?
  - `pages/news.md` archive page currently has Lorem-ipsum-style heading "Congue Ipsum" + body.
  - The one news article (`news/1980-01-01-second.md`) has `meta_title: First Post` and `title: New Improved Essex Inflatables Website!`.
  - Confirm which one to change and the new title.
- [ ] **News page body**: the archive page has placeholder Lorem-ipsum text that needs replacing — what content should go here (or should it just be the post listing)?
- [ ] **Workshop postcode**: `pages/contact.md` reads "Hullbridge area (SS5 POSTCODE)" — what is the real postcode?
- [ ] **Mobile number wording**: `pages/contact.md` says "our mobile number will be changing soon" — is this still true, and if not, what replaces it?
- [ ] **Emergency call-out / emergency repairs wording**: on `pages/repairs.md`, what is the new preferred wording?
- [ ] **Homepage positioning / opening message**: preferred tone for operator/trade positioning.
- [ ] **Contact page conversion focus**: what extra fields or flow should the repair enquiry form have?
- [ ] **Parts & Equipment page detail + CTA**: needs more product detail (stock, prices, specs — see `QUESTIONS.md`).
- [ ] **Repair quote enquiry flow**: preferred structure for submitting photos and getting an assessment (email only, form with upload, WhatsApp, etc.?).
- [ ] **Reviews / testimonials section**: Facebook reviews embedded, manual quotes, or a link-out? Review content needed.
- [ ] **Gallery section**: confirm desired structure (per-project pages, simple grid, before/after slider, etc.).

## Requires Images

Blocked on image assets being supplied.

- [ ] Replace the Ellis Leisure banner on the Links page with the Ellis Leisure logo — only `images/ellis-leisure-banner.jpg` exists today; need a logo file.
- [ ] Gallery section — need before-and-after photos of recent repairs.
- [ ] More real imagery throughout the site — current images include stock-style shots plus a set of `WhatsApp Image 2026-02-24 at …` files that could be used if suitable.
- [ ] Any imagery for a testimonials / reviews section.

## Requires Web Research

- [ ] PIPA Testing page: double-check what now falls within and outside of PIPA's remit — confirm current scope against pipa.org.uk and update `pages/pipa-inspections.md` (and the non-PIPA list in `pages/services.md`).
- [ ] SEO keywords + location-based wording — research local search terms (surrounding towns, "bouncy castle repairs near me", "PIPA testing Essex", etc.) and weave into page copy and `meta_description`/`meta_title` fields.
- [ ] Confirm the PIPA website URL used in `snippets/right-content.md` and `pages/links.md` (currently https://www.pipa.org.uk/).
- [ ] Confirm Facebook reviews URL / embed approach for the reviews section (the existing Facebook page link is in `_data/site.json`: https://www.facebook.com/p/Essex-Inflatables-100063786302750).
