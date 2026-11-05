# Project notes for Claude

This is Devanshi Sharma's (UI/UX designer, Noida) portfolio site. It's static HTML/CSS/JS with no framework and no build step.

## Design rules (agreed with Devanshi)
- Light, minimal, calm, with a royal blue accent (`--royal: #2747D9`) on a cool off-white sheet inside a royal blue frame.
- Fonts: Bricolage Grotesque (display) and DM Sans (body). DM Mono for labels, Caveat for small handwritten notes.
- Sections are horizontal and compact. Keep plenty of white space.
- Single page: hero, projects, about with stats and rotating mockups, sketchbook carousel, approach band, journal, recommendations, footer.
- Only two kinds of detail page: case studies (`#<case-slug>`) and journal posts (`#<post-slug>`). Don't add other pages.
- Case study images are full width and stacked vertically, one between each pair of text sections, never side by side. 5 images at most.
- Project cards are image plus name only. Sketch cards and mockup cards have no captions.
- Resume link sits in the top-right nav. LinkedIn link is in the footer only. There's a single "Back to top" link, bottom right of the footer.
- The recommendations row scrolls slowly on its own and has no arrow buttons.
- She likes coffee, not chai.

## Where things live
- Content data is at the top of `app.js`: `PROJECTS`, `CASES`, `SCREENS`, `MOCKUPS`, `SKETCHES`, `POSTS`, `TESTIMONIALS`.
- Routing: `route()` in `app.js` (hash based). Home section anchors are `#work`, `#about`, `#journal`, `#contact`.
- Respect `prefers-reduced-motion`. All animation loops check `reduce`.

## Testing
Serve with `python3 -m http.server` and check desktop (1440) and phone (390) widths. There should be no horizontal scroll, no console errors and no broken images.
