# Project Plan

## Project Goal
Build a polished wayfinding assistant for the Hebrew University Mount Scopus Social Sciences building that helps users reach specific rooms using landmark-based starts, verbal directions, and optional video walkthroughs.

## What This Project Is
- A campus wayfinding product for one building
- A student-facing guided navigation experience
- An MVP built around static route content and clear presentation

## What This Project Is Not
- Not GPS-based navigation
- Not live indoor positioning
- Not a complex map-routing engine
- Not a full campus-wide navigation platform yet

## MVP Scope
- Allow the user to choose a starting landmark
- Allow the user to enter or select a destination room number
- Show step-by-step verbal directions
- Show estimated walking time
- Show floor information
- Show an optional short video walkthrough when available
- Show a simple visual reference such as a blueprint crop or image when available

## Starting Landmarks For MVP
- Main entrance
- Lobby
- Elevators
- Stairs
- Library entrance
- Cafeteria area

## Data Strategy
The first version should use static or mock route data.

Each route entry will likely need:
- starting landmark
- destination room number
- floor number
- verbal directions
- estimated walking time
- optional video asset
- optional reference image or blueprint section

## Product Priorities
- Clarity over complexity
- Fast access to directions
- A calm, polished mobile-friendly interface
- Easy maintenance of route content
- A structure that can grow without adding premature technical complexity

## Recommended Next Development Step
1. Finalize the content model for routes, landmarks, rooms, and media.
2. Decide on the first set of rooms to support in the MVP.
3. Scaffold the React + Vite + Tailwind frontend.
4. Build the main flow around landmark selection and room lookup.
5. Add static route cards with verbal directions and optional media.

## Open Questions
- Which exact room numbers should be included in the first MVP?
- Will room input be free text, dropdown-based, or both?
- How many video walkthroughs are realistically available for version one?
- What visual reference assets already exist and in what format?
