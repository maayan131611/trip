# Design: "הטיול של מעין" as a bus ticket

The page is the boleto (long-distance bus ticket) for the leg Maayan is on. Past and planned stops are a pile of torn stubs; the stats page is the conductor's punch card.

## Color (tokens in `style.css` `:root`)
| Token | Light | Role |
|---|---|---|
| `--ground` / `--ground-deep` | #1d3fb8 / #132c86 | Ticket-office cobalt; the whole page ground (drenched) |
| `--stock` | #f4f7fc | Original ticket stock: the live ticket, "now" stub, map sheet, punch card |
| `--stock-pink` | #f8cfd5 | Duplicado copy: passenger stub, visited stops |
| `--stock-mint` | #c2e8de | Triplicado copy: planned stops |
| `--ink` / `--ink-soft` | #141a3c / #3e4670 | Printing ink on stock |
| `--print` | #1d3fb8 | Pre-printed rules and headers on stock |
| `--stamp` | #d32638 | Rubber-stamp red: the stamp, "now", "בקרוב" |
Dark mode deepens the ground to #0f1d57 and dims the stock; ink stays dark because paper stays paper.

## Type
- Display: **Karantina** 700 (condensed Hebrew) for the ticket header, cities, section titles, stamp.
- Body and field labels: **Rubik** 400/500/700.
- Data: **VT323** dot-matrix, only for numbers, dates, codes, coordinates (`.dot`, LTR-isolated, tabular). Hebrew text values use `.txt` (Rubik) instead.

## Components
- `.ticket`: scalloped top/bottom edge via mask; `.t-main` (security-print lines) + `.t-stub` separated by a dashed perforation; stub moves below on ≤620px.
- `.stamp`: the one authored motion, a 0.55s expo-out stamp landing across the tear line; off under reduced motion.
- `.stub`: route row with side notches; `.hole` is dashed (unused), punched (`done`, shows ground through it) or red (`now`).
- `.punch` / `.prow` / `.holes`: punch-card rows; one punched hole per counted item.
- `.btn`: ticket-office tag; disabled state shows "בקרוב" in stamp red.
- Icons: inline SVG, 2px stroke. No glyph or emoji icons.

## Rules
- All data still comes from `trip.js`; markup renders from it.
- Shadows are neutral black with offset; no colored glows.
