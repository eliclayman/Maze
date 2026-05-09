# AI Prompts

This file stores useful prompt templates for AI-assisted planning, design, and implementation during development.

## UI Conversion Prompt
Use when turning a static HTML prototype into reusable React components.

```text
Convert this prototype into a React component structure for a Vite application.
Preserve the visual direction and layout intent, but refactor repeated UI into reusable components.
Use clean, readable component boundaries and keep the code easy to extend.
If styling is needed, prefer Tailwind utility classes unless a shared style belongs in a global stylesheet.
```

## Tailwind Setup Prompt
Use when preparing the first production-ready styling pass.

```text
Set up Tailwind CSS for this project and create a clean design foundation.
Define a small set of reusable colors, spacing rules, and typography choices based on the existing prototypes.
Avoid generic defaults and keep the result cohesive with the product theme.
```

## Component Planning Prompt
Use before implementing a new screen or feature.

```text
Analyze this feature and propose the React component structure first.
List the main UI sections, reusable components, expected props, and any static data needed for the first pass.
Keep the proposal practical and aligned with a Vite + React + Tailwind codebase.
```

## UX Review Prompt
Use when reviewing a prototype or implemented page.

```text
Review this interface for clarity, usability, hierarchy, and mobile responsiveness.
Identify the biggest issues first, then recommend improvements that preserve the existing product direction.
Focus on real UX problems instead of cosmetic nitpicks.
```

## Data Modeling Prompt
Use when defining map, route, or destination data.

```text
Design a simple frontend-friendly data shape for buildings, destinations, and routes.
Optimize for readability and ease of iteration in an MVP.
Include a small example payload and explain why the structure fits the current product scope.
```
