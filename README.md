# Devanshi Sharma · Portfolio

A one-page portfolio with case study and journal detail pages. It's plain HTML, CSS and JavaScript, with no build step, so it runs on any static host.

## Run it locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

Use a local server rather than opening `index.html` straight from disk. Fonts and images load more reliably that way.

## What's where

| Path | What it is |
|---|---|
| `index.html` | Page shell: meta tags, nav, footer |
| `styles.css` | All styles. Colour tokens sit at the top in `:root` (royal blue is `--royal`) |
| `app.js` | Content and behaviour: projects, case studies, journal posts, recommendations, animations, routing |
| `assets/images/` | Every image: thumbnails, case study screens, mockups, drawings, portrait |
| `assets/fonts/` | Self-hosted Bricolage Grotesque, DM Sans, DM Mono, Caveat |
| `assets/og-image.jpg` | The preview card shown when the link is shared |
| `favicon.svg` | Browser tab icon |

## Editing content

All content lives near the top of `app.js`:

- `PROJECTS`: project cards (name, thumbnail)
- `CASES`: case study text, keyed by slug (`runway`, `top-brass`, `syndicate-research`, `navstar`, `vault`, `approval-workflow-builder`)
- `SCREENS`: case study images, up to 5 per case, shown full width between sections
- `MOCKUPS`: the 6 rotating cards in the About section
- `SKETCHES`: sketchbook drawings
- `POSTS`: journal entries
- `TESTIMONIALS`: recommendations (from LinkedIn)

To swap an image, replace the file in `assets/images/` and keep the same name. You can also add a new file and update its path in `app.js`.

Pages use hash links: `#runway` opens a case study and `#feature-trap` opens a journal post. These work on every static host with no server setup.

## Publishing

Any of these give you a free live URL in a few minutes:

1. **Netlify Drop** (easiest). Go to app.netlify.com/drop and drag the `site` folder onto the page. You get a URL straight away, and you can rename it or add a custom domain in Site settings.
2. **GitHub Pages.** Push this folder to a GitHub repo, then go to Settings → Pages → Deploy from branch → `main` / root. The site appears at `https://<username>.github.io/<repo>/`.
3. **Vercel.** Import the repo at vercel.com/new. Choose framework "Other", with no build command and the output directory set to the repo root.

After publishing, change `og:image` in `index.html` to the full URL (for example `https://yourdomain.com/assets/og-image.jpg`) so link previews show the image on LinkedIn and WhatsApp.
