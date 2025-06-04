# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

```
react-router-Example
├─ .dockerignore
├─ app
│  ├─ app.css
│  ├─ components
│  │  ├─ app-sidebar.tsx
│  │  ├─ nav-main.tsx
│  │  ├─ nav-projects.tsx
│  │  ├─ nav-user.tsx
│  │  ├─ team-switcher.tsx
│  │  └─ ui
│  │     ├─ avatar.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ input.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     └─ tooltip.tsx
│  ├─ hooks
│  │  └─ use-mobile.ts
│  ├─ lib
│  │  └─ utils.ts
│  ├─ pages
│  │  └─ test.tsx
│  ├─ root.tsx
│  ├─ routes
│  │  ├─ dashboard.tsx
│  │  ├─ home.tsx
│  │  └─ testpage.tsx
│  ├─ routes.ts
│  └─ welcome
│     ├─ logo-dark.svg
│     ├─ logo-light.svg
│     └─ welcome.tsx
├─ assets
│  └─ images
│     └─ svg
├─ components.json
├─ Dockerfile
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  ├─ avatars
│  │  └─ shadcn.jpg
│  └─ favicon.ico
├─ react-router.config.ts
├─ README.md
├─ tsconfig.json
└─ vite.config.ts

```