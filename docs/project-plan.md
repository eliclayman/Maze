# Project Plan

## Project Goal
Build a polished indoor campus navigation assistant for students, starting with a focused MVP that simulates navigation inside a university building using predefined routes and mock positioning.

## MVP Scope
- Select a building or area
- Search for a destination
- Show a simulated current location
- Display a route on a map or floor image
- Present step-by-step walking directions
- Show estimated walking time
- Support a responsive mobile-friendly UI

## Initial Tech Stack
- React
- Vite
- Tailwind CSS
- Static image or SVG map assets
- GitHub for version control
- Vercel for deployment

## Pre-Development Priorities
- Keep existing prototypes as visual and UX references
- Set up the React + Vite app structure
- Configure Tailwind and design tokens
- Decide whether to start with JavaScript or TypeScript
- Define the first realistic building/destination demo flow

## Suggested Application Structure
- `src/`
- `src/components/`
- `src/pages/` or `src/routes/`
- `src/assets/`
- `public/`

## First Development Milestones
1. Scaffold the application with Vite.
2. Configure Tailwind CSS and base styling.
3. Build the initial landing and map-view layout.
4. Convert prototype ideas into reusable React components.
5. Load one building map and mock route data.
6. Add destination selection and route instruction display.

## Open Questions
- Will the first version target one building only or multiple buildings?
- Should maps be image-based, SVG-based, or mixed?
- Should route data live in static JSON at first?
- Is the first release intended more as a demo or as a product prototype?
