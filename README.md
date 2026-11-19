# Blue Barn Accounting

Marketing site for a fractional CFO and accounting practice, built with React and Vite with the Blue Barn Accounting brand (palette, type, Material Symbols icons, logo).

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run build:single  # one self-contained HTML file in dist-single/ (or pass a path after --)
```

## Structure

```
src/
  main.jsx                  entry point, imports global styles
  App.jsx                   page composition
  data/content.js           lists of services, industries, FAQs, nav and footer links, contact details
  context/DrawerContext.jsx shared open/close state for the contact drawer
  utils/roman.js            1 → "I" for the card numbering
  components/               one file per section or reusable piece
  styles/
    tokens.css              colours, fonts, type sizes, motion timings (edit here first)
    base.css                reset, overlays, buttons, eyebrow labels, divider, focus styles
    header.css  sections.css  footer.css  drawer.css
```

## Things to change before launch

- **Contact details**: edit `site` in `src/data/content.js` (the address is still a placeholder).
- **Contact form**: `ContactDrawer` accepts an `onSubmit(data)` prop, passed in `App.jsx`. Right now submitting only shows the thank-you message. Point it at your form service or API.
- **Footer and legal links** currently point to `#`.
- **Industry panels**: the gradient blocks with icons are stand-ins. Put a photograph in `.arch-frame` and the muted-to-full-colour hover effect applies to it.

## Typography

Headings are Newsreader Medium, body copy is Scope One at 16/26, and eyebrows, navigation, buttons and labels are Alegreya Sans italic. Fonts load from Google Fonts in `index.html`.

## Brand

Colours are tokens in `tokens.css` (Slate, Sky, Earth, Copper, Cream, Ivory). The theme is dark blue: Cream body text, Ivory headings, Copper buttons and accents (Sky is decoration only). Icons are Material Symbols, outlined by default (`filled` prop for emphasis), in `components/iconPaths.js`. The logo is `src/assets/blue-barn-logo.svg`; the favicon is the barn mark in `public/favicon.svg`. No text is uppercase and no corners are rounded, by design.
