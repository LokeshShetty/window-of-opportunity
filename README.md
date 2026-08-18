# Window of Opportunity

Next.js 16 + TypeScript, plain CSS Modules. No other dependencies.

```bash
npm install && npm run dev
```

Live at https://window-of-opportunity-rust.vercel.app/

## How it works

- Roadmap content and connector config live in
  `src/app/(home)/components/Roadmap/data.ts`.
- Word reveal is CSS scroll-driven (`view-timeline` per panel). Firefox still
  flags `animation-timeline`, so a `--p` custom property written once per rAF
  covers it.
- Connector lines are measured at runtime (`getBoundingClientRect` +
  `ResizeObserver` + `fonts.ready`) and drawn via `stroke-dashoffset` in a
  small rAF loop — SVG paths can't carry a scroll timeline.
- Base state is the finished state: no JS, no timeline support, or reduced
  motion all land on the same readable page.
- `?lines` freezes the connectors and outlines their anchors for checking
  geometry.

## With another week

- Compress the two background videos. They are 19MB of the 29MB total and the
  only thing that still feels slow on a throttled connection.
- Finish the colour pass. A few colours are still written out by hand instead
  of using the shared variables, so a full dark theme is an audit rather than
  a rebuild.
- Draw the connector lines the same way the words are revealed. The words are
  pure CSS; the lines need a little JavaScript because SVG paths can't use CSS
  scroll animations. The fix I would try is to move the animation onto a plain
  `div` around each line and let the path follow along, which drops the scroll
  listener. Finding where the words sit would still need JavaScript. It is not
  slow — it is two mechanisms doing one job.
- Give the "+" buttons on the Vision cards something to open.

## Skipped on purpose

- The Vision "+" buttons don't open anything. The design draws the button but
  nothing behind it, and inventing content for six cards was not worth the
  time on a section neither task is graded on.
- No hamburger menu on mobile. The nav scrolls sideways in its own track, and
  a menu button with no drawer behind it is a button that does nothing.
- No animation on the circle in the "straight lines" section. The brief asks
  for motion in the roadmap and the hero; a static ring matches the design.
- Pill extras: syncing across tabs and closing on Escape were both built, then
  cut. Small, but nobody asked for them.
- No fake booking flow or chat. Every button scrolls to the Find Us section
  instead of pretending there is a backend.
