# Design: "הטיול של מעין" as mission control

Redesigned 2026-11-10 at Maayan's request to match his private trip board: dark, technological, with transitions. The earlier bus-ticket world is retired. Single dark world by choice; there is no light theme.

## Color (tokens in `style.css` `:root`)
| Token | Value | Role |
|---|---|---|
| `--bg` | #05080f | Deep-space ground |
| `--panel` / `--panel-2` | #0c1322 / #111a2e | Glass panel gradient |
| `--line` | #1f2c49 | Hairlines and panel borders |
| `--ink` / `--muted` | #e8eeff / #9aaad0 | Text and secondary text |
| `--cy` / `--vi` | #49e6ff / #8e7dff | Signal cyan and violet: readouts, links, the gradient line |
| `--ok` / `--warn` / `--bad` | #3df5a6 / #ffc857 / #ff6384 | Status only: "here now", "soon", errors |

## Type
- Display and body: **Rubik** 400/500/700/800.
- Readouts: **Chakra Petch** 600/700 on `.dot` (numbers, dates, codes; LTR-isolated, tabular). It has a plain zero, which older relatives read easily.

## Components
- `.glass` (also `.punch`, `.mapsheet`, `.btn`, `.stub`): the one panel surface, with a cursor spotlight on hover.
- `.hero`: avatar in a gradient ring, title, `.stamp` status chip with a live dot, bio.
- `.now`: from → to, the live `.clock` countdown until departure (hidden once the trip starts), and `.t-fields`.
- `.stub`: route row; `.hole` is hollow (planned), cyan (visited) or pulsing green (here now).
- `.prow` / `.holes`: stat rows; one lit dot per counted item.
- `fx.js`: constellation canvas and the spotlight, shared by all pages.

## Motion
Panels rise in with a blur on load, countdown digits tick, live dots ping, and pages blur across with cross-document view transitions. All of it is off under reduced motion, and nothing waits on an animation to become visible.

## Rules
- All data still comes from `trip.js`; markup renders from it.
- Icons are inline SVG coloured by CSS. No glyph or emoji icons.
