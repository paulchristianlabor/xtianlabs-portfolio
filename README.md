# Traveller Portfolio

A clean, visual-first traveller portfolio built with Vue 3 and TypeScript. This project is frontend-only and intended for static deployment.

## Purpose

This site focuses on four sections only: Hero, About, Destinations, and Gallery. The experience is designed to be minimal, fast to scan, and image-led.

## Tech Stack

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vitest
- Vue Test Utils
- Testing Library for Vue

## Features

- Responsive navigation with mobile toggle
- Hero, About, Destinations, Gallery, and Footer sections
- Modular and reusable section architecture
- Reusable UI primitives (buttons, cards, badges, section wrappers)
- Accessible landmarks, focus states, and keyboard-friendly navigation
- Static frontend-only implementation

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Linting And Formatting

```bash
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

## Testing

```bash
npm run test
npm run test:watch
npm run test:coverage
```

## Build

```bash
npm run build
npm run preview
```

## Deployment Summary

- Build static files into ./dist using npm run build.
- Deploy the ./dist directory to any static hosting provider.
- Keep the project frontend-only and do not commit secrets.

## Documentation

- ./docs/setup.md
- ./docs/structure.md
- ./docs/testing.md
- ./docs/security.md
- ./docs/deployment.md
