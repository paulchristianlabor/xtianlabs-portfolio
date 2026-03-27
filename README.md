# Personal Travelling Website

A modern, elegant, static personal travelling website built with Vue 3 and TypeScript. This project is frontend-only and intended for static deployment.

## Purpose

This site template showcases travel content sections such as destinations, stories, gallery highlights, practical tips, and a contact area, all with accessible and responsive layout patterns.

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
- Hero, About, Destinations, Stories, Gallery, Tips, Contact, and Footer sections
- Modular and reusable section architecture
- Reusable UI primitives (buttons, cards, badges, section wrappers)
- Accessible form labels, landmarks, and focus states
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
