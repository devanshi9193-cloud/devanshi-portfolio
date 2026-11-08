# Project notes for Claude

This is Devanshi Sharma's (UI/UX designer, Noida) portfolio site. It's static HTML/CSS/JS with no framework and no build step. It's live on GitHub Pages at https://devanshi9193-cloud.github.io/devanshi-portfolio/ (repo `devanshi9193-cloud/devanshi-portfolio`, `main` branch, root folder).

## Design rules (agreed with Devanshi)
- Playful blue scrapbook look: a cream paper sheet (`--paper`) inside a soft blue frame (`--frame`), navy ink text (`--ink`), blue accent (`--royal`), butter yellow (`--sun`) and pale blue (`--royal-mist`, `--royal-soft`). Tokens live in `:root` in `styles.css`.
- Scrapbook details everywhere: gingham tape labels, clothespins, polaroids, stickers, hand-drawn doodles (`FD` in `app.js`), squiggle underlines. Doodles must match her photos and the palette.
- Fonts: Bricolage Grotesque (display), DM Sans (body), DM Mono (small labels), Caveat (handwritten notes, the logo, the footer name).
- Single page, in this order:
  1. Hero: copy on the left (eyebrow, headline with handwritten blue accent words, short line, Resume + See my work buttons, "available for work" tape), photo on the right with an open envelope behind it and a stamp on top. Snapshots taken by clicking the photo sit on its 4 corners, then slide into the envelope, which closes before the note says "such cute photos!" and opens again a few seconds later.
  2. Projects: all cards the same size (no card should look more important), 2 per row on laptop and desktop, 1 per row on phones.
  3. About: notebook spread, then the "Off the clock" diary: an open blue diary on gingham with her photos, ticket stubs, a pencil, an instant camera and an iPod, all draggable. No paintings in the diary.
  4. "Workshops & speaking" (`TALKS` in `app.js`): one spread per session she led at Jasper Colin, a lined note (date tape, topic, write-up, format and audience, a handwritten takeaway, "View on LinkedIn" in a new tab) next to 3 taped photos from that LinkedIn post (`assets/images/talks/`). No co-presenter names.
  5. "From my sketchbook": a wire grid wall (16x10 cells on desktop, 6x15 on phones; don't make it taller, fit new items into gaps) with paintings (`drawing-1` to `drawing-8`, cropped to the painted area and upright), polaroids, 2 quote cards, bag charms and a blue claw clip. Items are scattered and tilted, and visitors can drag them anywhere on the grid (press and hold on touch).
  6. Approach: graph-paper page of word stickers ("things i keep coming back to") next to 4 sticky-note steps. Heading: "An eye for detail. A mind for people."
  7. Journal, recommendations, postcard footer with the handwritten "Devanshi" wordmark.
- Only two kinds of detail page: case studies (`#<case-slug>`) and journal posts (`#<post-slug>`). Don't add other pages.
- Case study images are full width and stacked vertically, one between each pair of text sections, never side by side. 5 images at most.
- Project cards are the thumbnail only, no name, and sit straight (no tilt) (thumbnails exported from her Figma file "User Testing (Redesign)", Section 1, saved in `assets/images/cards/`, set as `card` in `PROJECTS`; `img` stays the case study cover). Paintings on the wall have no captions.
- Resume link sits in the top-right nav. LinkedIn link is in the footer only. There's a single "Back to top" link, bottom right of the footer.
- The recommendations row scrolls slowly on its own and has no arrow buttons.
- She likes coffee, not chai.
- Never use the phrase "people first, pixels next" anywhere on the site.
- Don't change design, layout or content unless she asks.

## Where things live
- Content data is at the top of `app.js`: `PROJECTS`, `CASES`, `SCREENS`, `PHOTOS` (about diary), `WALL` (sketchbook wall), `POSTS`, `TESTIMONIALS`, `WORDS`.
- Her personal photos are in `assets/images/` (`hero-selfie.jpg`, `life-*.jpg`). Resize new photos to about 1000px (hero 1400px) before adding them.
- Routing: `route()` in `app.js` (hash based). Home section anchors are `#work`, `#about`, `#journal`, `#contact`.
- `styles.css` is layered: base styles, then later blocks override them (blue scrapbook theme, layout layer, then per-section blocks at the end). Add new overrides at the end.
- Respect `prefers-reduced-motion`. All animation loops check `reduce`.
- Scroll reveal: anything with `.reveal` (plus the selectors in `REVEAL` in `app.js`) fades and rises in when it scrolls into view, using the CSS `translate`/`scale` properties. Never put `.reveal` on draggable items (`.gw-it`, `.dy-it`), because dragging also uses `translate`. The hero plays in on page load instead.

## Testing
Serve with `python3 -m http.server` and check desktop (1440) and phone (390) widths. There should be no horizontal scroll, no console errors and no broken images.
