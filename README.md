# HUJI Maze — Building 21 Wayfinding

A wayfinding web app to help guests and new students navigate the **Hebrew University, Mount Scopus** campus. Scope of this proof-of-concept: **Building 21, Faculty of Social Sciences**.

**Live demo:** https://eliclayman.github.io/Maze/compass.html

You tell it the room you need; it gives clear, step-by-step directions **from the building entrance** — with real turns, landmarks, and a schematic map.

---

## What's in this repo

| Path | What it is |
|------|------------|
| **`compass.html`** | ⭐ The working app (single self-contained HTML file). This is what's deployed at `/compass.html`. Start here. |
| `huji-maze.html` | The earlier prototype (kept for reference; superseded by `compass.html`). |
| `index.html` | Redirect to the prototype. |
| `src/` | A React/Vite scaffold (landing-page components + `data/*.json`). Separate, earlier exploration — not the deployed app. |
| `docs/` | Project plan, progress log, prompts. |

> **Raw building data** (the AutoCAD `.dwg`/`.pdf` floor plans and the walkthrough video) is **not in this repo** — this repo is public, and those are internal/contain footage of people. They're shared with the team separately (ask Eli for the Drive folder). The layout facts you need to work on the app are summarised below.

---

## Run it locally

**The app (`compass.html`)** needs no build — it's one file. Either:
```bash
# just open it
open compass.html
# …or serve it (so the login fetch / PWA bits behave)
python3 -m http.server 4173
# then visit http://localhost:4173/compass.html
```

**The React scaffold (`src/`)**, if you want to work on it:
```bash
npm install
npm run dev
```

---

## How the app works (the important part)

The quality of the directions comes from modelling the floor as a **real graph with geometry**, not a flat list. Each office floor is a **ring of rooms around a central open atrium** (the diamond-shaped tower). The engine:

1. Knows each room's position around the ring.
2. Finds the shorter way around from the entrance/stairs.
3. Computes **actual left/right turns** and **which side your door is on** from the geometry.
4. Adds real landmarks (the red atrium railing, the secretariats).

### Building facts (don't break these)
- **Room numbering:** `21` + floor digit + 2-digit room. e.g. `21521` = Building 21, Floor 5, room 21.
- **Stairs/elevator are at the ENTRANCE**, not in the centre. The centre is the open atrium.
- **Floor → plan file:** `02011`=parking, `02012`=classrooms, `02013`=entrance+secretariats, `02017`=floor 5. (See `data/building-21-plans/`.)
- **Top floor is 6.** Office floors = 4, 5, 6.

### Status
- ✅ **Floors 4, 5, 6** (faculty offices) — fully working.
- ⬜ **Floor 2** (classrooms) and **Floor 3** (entrance/secretariats) — need their room numbers added.
- ⬜ **Search by professor name** — wired up; needs the room→name list (the `people` object in `compass.html`).

### Want to add a floor or rooms?
Open `compass.html` and edit the `FLOORS` config near the top of the `<script>`:
```js
const floor5Rooms = seq(21502, 21534);   // room ranges
const FLOORS = {
  5: { label: 'Floor 5', kind: 'Faculty offices', rooms: floor5Rooms, access: 'elevator' },
  // add floors here…
};
```

---

## Deploying
The live site is served from the **`gh-pages`** branch. To update the deployed app, copy your edited `compass.html` onto `gh-pages` and push (ask Eli if unsure — there's a one-command flow).

## Contributing
This is a class project. Branch off `main`, make your change, open a pull request. Keep `compass.html` self-contained (no external dependencies) so the deploy stays a single-file drop.
