# Window of Opportunity

Next.js 16 + TypeScript, plain CSS Modules. No other dependencies.

```bash
npm install && npm run dev
```

## How it works

live on - https://window-of-opportunity-rust.vercel.app/

- Roadmap content and connector config live in `src/data/roadmap.ts`.
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

- Re-encode the two ambient videos (19MB of the remaining 29MB) and serve
  AV1/WebM with H.264 fallback. They are the only assets that still hurt on a
  throttled connection.
- Finish the theming pass: a handful of colors are still literals. The role
  tokens already invert the dark section by reassigning three variables, so a
  full dark theme is mostly an audit, not a rebuild.
- Rework the connector drawing. The words run on CSS scroll timelines, but SVG
  paths can't carry one, so the curves use a small rAF loop. I'd prototype
  CSS motion-path or per-segment elements to get the whole section off the
  main thread.
- Wire the Vision card expanders to real content panels.

## Skipped on purpose

- The Vision "+" buttons don't open anything. They're an affordance drawn in
  the design with nothing behind it; wiring six overlays didn't serve the
  70/30 weighting. The accordions got invented copy instead, because a plus
  that expands to nothing reads as a bug.
- No hamburger menu at mobile. The nav scrolls horizontally in its own track;
  shipping a menu button without a drawer is a dead control.
- No animation on the circle in the "straight lines" section. The brief's
  motion requirements are the roadmap and the hero; a static ring matches the
  comp and carries no risk.
- Pill extras: cross-tab sync and Escape-to-close were built, then cut. A few
  lines each, but nobody asked for them.
- No fake booking flow or chat. Every CTA anchors to the Find Us section
  rather than pretending a backend exists.
