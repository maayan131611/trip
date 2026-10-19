# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Maayan's family and friends in Israel (parents, grandparents, friends), mostly on phones, opening a link Maayan shared to see where he is on his South America backpacking trip and whether he's okay. Secondary: friends met on the road. Hebrew readers; the page is Hebrew, RTL.

## Product Purpose

"הטיול של מעין": one link that answers "where is Maayan now, where has he been, where is he heading" without him writing updates. Success: a relative opens it, understands in seconds which city he is in and what's next, and can browse photos per stop.

## Positioning

A personal, hand-kept trip page tied to one traveler's real route: city-level location, the stop list, photos per stop, playful counters (flights, night buses, treks, extreme activities, hostels). Polarsteps holds the detailed auto-tracked map; this page is the home link.

## Operating Context

Maayan sends updates and photos in a Claude project thread; Claude edits `trip.js` (all data) and pushes to `main`; GitHub Pages deploys maayan131611.github.io/trip. Static HTML/CSS/JS only, no build step. Before departure (7.12.2026) the page counts down; after landing it shows "day X of the trip".

## Capabilities and Constraints

- Data lives only in `trip.js` (`TRIP.current`, `stops[]` with photos, `counters`, `links`); pages render from it. Keep that contract.
- Pages: `index.html` (status, Leaflet map with photo pins, route list, lightbox, links), `stats.html` (numbers, route legs).
- Location is city-level only. Travel partner not shown. Budget not shown. (User decisions, 2026-10-08.)
- Links to Polarsteps and Instagram are placeholders until he provides them.

## Brand Commitments

- Title "הטיול של מעין". Bio copy written by Maayan: "מעין המטורלל בדרום אמריקה. לפני שאתם שואלים: לא יודע לאן אלך, לא יודע מתי אחזור, והאמת שגם לא אכפת לי." Keep verbatim.
- Profile photo `avatar.jpg`.
- Voice: casual, funny, Hebrew, first person.

## Evidence on Hand

Real route so far: Tel Aviv → Buenos Aires (8.12.2026, planned) → Ushuaia (planned). No trip photos yet; do not invent photos, places visited, or counters.

## Product Principles

1. Where he is now beats everything else on the first screen.
2. Family on phones first: large, legible, obvious taps.
3. Updating must stay a one-file data edit.
4. Fun and personal, never a travel-agency page.

## Accessibility & Inclusion

Older relatives: readable sizes, strong contrast, no tiny tap targets, works without hover.
