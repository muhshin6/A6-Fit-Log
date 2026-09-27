# FitLog

> **Train with intent. Log every set.**

A dark, no-nonsense workout companion. Browse a library of lifts, lock the ones you want into today's plan, and watch the week's work add up — with no accounts, no backend, and no noise.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-19-087ea4?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss)

---

## Description

FitLog is a client-rendered fitness planning app built on the Next.js App Router. It ships a curated catalog of 12 exercises across every major muscle group, each with duration, calories burned, difficulty, equipment, sets, reps, rating, and step-by-step instructions. Users can save lifts for later, add up to five exercises to today's plan, and review live totals for exercise count, minutes, and calories. All plan and saved data persists in `localStorage`, so the app works entirely in the browser with zero setup.

## Technologies Used

| Technology | Version | Role |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.3 | App Router, server components, dynamic routes, static generation |
| [React](https://react.dev) | 19.2 | Component model, hooks (`useState`, `useEffect`, `useMemo`) |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Typed `ICards` model across all pages and components |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Utility-first styling and the dark/lime design system |
| [daisyUI](https://daisyui.com) | 5.7 | Component primitives layered on Tailwind |
| [FontAwesome](https://fontawesome.com) | 7.3 | Iconography (clock, fire, star, calendar, bookmark) |
| [react-toastify](https://github.com/timarney/react-toastify) | 11.1 | Toast feedback for plan/save actions |
| [ESLint](https://eslint.org) | 9 | Linting with `eslint-config-next` |

## Key Features

1. **Workout Library** — A responsive, dark-themed grid of 12 exercises spanning every major muscle group, each card showing duration, calories, rating, and equipment at a glance.
2. **Detailed Exercise Pages** — Dynamic routes (`/fitlogcards/[id]`) render a full spec sheet: muscle-group tags, equipment, difficulty, sets, reps, duration, calories, rating, and numbered instructions, with graceful handling for unknown IDs.
3. **Today's Plan & Saved Lists** — One-click "Add to today's plan" and "Save for later" actions, persisted in `localStorage` and synchronized across tabs via a custom `fitlog-storage` event, with reactive count badges in the navbar.
4. **Live Session Statistics** — The My Plan page tallies total exercises, minutes, and calories burned, and can sort the plan by duration, calories, rating, or name.
5. **Polished Dark UI** — A cohesive black/lime theme built with Tailwind CSS and daisyUI, featuring a sticky navbar, hero banner, loading state, 404 page, toast notifications, and fully responsive layouts from mobile to desktop.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── fitlogcards/
│   │   ├── [id]/page.tsx     # Exercise detail route
│   │   └── fitlogscards.tsx  # Library grid
│   ├── myplan/                # Plan + saved view with stats and sorting
│   ├── ui/nav-links.tsx       # Client-side active nav link
│   ├── layout.tsx             # Navbar, ToastContainer, Footer
│   ├── loading.tsx            # Route-level loading state
│   ├── not-found.tsx          # 404 page
│   └── page.tsx               # Home: Banner + library
├── components/
│   ├── homepage/Banner.tsx    # Hero section
│   └── shared/                # Navbar, Footer, cards, ActionButtons, PlanSavedCount
├── data/fitlog.json           # Exercise catalog
└── types/cards.types.ts       # ICards interface
```

## License

This project is for educational purposes and is not licensed for commercial use.
