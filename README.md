# Vite Starter — Tailwind + shadcn + React Router

Minimal, opinionated Vite starter with **Tailwind CSS v4**, **shadcn/ui (Base Nova)**, and **React Router**.

Clone → rename → build.

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **shadcn/ui** — `components.json` style `base-nova`, `neutral` base, CSS variables
- **React Router 8** — `createBrowserRouter` with layout + 404
- **Icons** — `@tabler/icons-react`
- **Extras** — `motion`, `next-themes`, `sonner` (toast)

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Vite dev server (port 3000) |
| `npm run build` | `tsc -b && vite build` |
| `npm run preview` | Preview production build |
| `npm run lint` | Oxlint |

## Directory

```
src/
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── ui/            # shadcn components
├── pages/
│   ├── home.tsx
│   └── not-found.tsx
├── lib/utils.ts       # cn() helper
├── hooks/use-mobile.ts
├── App.tsx            # Layout (Navbar + Outlet + Footer)
├── router.tsx         # createBrowserRouter
├── global.css         # Tailwind + shadcn theme
└── main.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customizing

1. Update `index.html` title/description
2. Edit `src/components/layout/navbar.tsx` — nav links, branding
3. Edit `src/components/layout/footer.tsx`
4. Replace `src/pages/home.tsx` sections with your product
5. Theme: `src/global.css` `:root` / `.dark` CSS variables (shadcn)

## Adding shadcn Components

```bash
npx shadcn@latest add button card dialog
```

Path aliases already configured: `@/*` → `./src/*` (`tsconfig.json:5`).

## Routing

Edit `src/router.tsx:6` to add pages:

```ts
{ path: "about", element: <AboutPage /> }
```

Layout lives in `src/App.tsx:6`. Uses `ScrollRestoration` and `Toaster`.

## SPA Deploy (nginx)

`nginx.conf:1` includes SPA fallback `try_files $uri /index.html` and long-cache for `/assets/`.
