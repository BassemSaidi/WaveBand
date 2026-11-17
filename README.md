# WaveBand — Official Frontend Concept

A complete responsive React + Vite frontend for the WaveBand smart bracelet startup concept.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

## Production build
Run `npm run build`. The production site is generated in `dist/`.

## What's included
- Responsive premium landing page (navy, orange and warm cream identity)
- Product, feature, surf forecast, community, pricing, founders, reviews and newsletter sections
- Interactive Three.js bracelet model: drag to rotate, scroll to zoom, auto-rotation
- Fictional €99 / €129 / €179 pricing tiers
- Founder cards for Saidi Bassem, Akkari Med Aziz and Salem Hafedh
- Demo counters and clearly labelled illustrative forecast/review data

## Important demo notes
This is a frontend-only class presentation concept. Visitor counts, community statistics, surf forecasts, testimonials, ratings, newsletter confirmation and pricing are illustrative UI data. No backend, real payments, GPS/SOS dispatch, live marine data or real user accounts are connected.

## Customization
Edit founder bios in `src/App.jsx` in the `founders` array. Update the demo numbers and surf spots in the same file. The bracelet geometry and controls are in `src/components/Bracelet3D.jsx`.
