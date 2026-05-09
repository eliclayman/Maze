# AI Prompts

This file stores useful prompt templates for planning, structuring, and implementing the Mount Scopus Social Sciences wayfinding MVP.

## Route Data Design Prompt
```text
Design a simple static data model for a campus wayfinding MVP.
The app is for the Hebrew University Mount Scopus Social Sciences building.
Each route should connect a starting landmark to a destination room number.
Include fields for verbal directions, estimated walking time, floor information, optional video walkthrough, and optional reference image.
Keep the structure easy to edit manually and easy to consume in a React frontend.
```

## Room Coverage Planning Prompt
```text
Help define the first MVP room coverage for the Social Sciences building.
Recommend a practical first set of room numbers and starting landmarks that provides useful coverage without overbuilding.
Optimize for clarity, repeatability, and ease of content collection.
```

## UX Flow Prompt
```text
Design the ideal MVP user flow for a student-facing building wayfinding app.
The user should choose a starting landmark, enter or select a destination room number, and then receive clear verbal directions with optional media.
Do not include GPS, live positioning, or advanced route generation.
Focus on simplicity, trust, and mobile usability.
```

## React Build Prompt
```text
Plan a React + Vite + Tailwind frontend for a building wayfinding assistant.
The MVP should use static route data and present landmark selection, room lookup, verbal directions, walking time, floor information, and optional video/reference media.
Avoid backend complexity and do not introduce GPS or live location logic.
Recommend a clean component structure before implementation.
```

## Content QA Prompt
```text
Review these route instructions for clarity and consistency.
Check whether the verbal directions are easy for a student or visitor to follow in a real building.
Flag ambiguous turns, missing landmark references, and wording that could confuse first-time visitors.
```
