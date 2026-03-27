# Testing Guide

## Tooling

- Vitest
- Vue Test Utils
- Testing Library for Vue
- jsdom test environment

## Run Tests

```bash
npm run test
```

## Watch Mode

```bash
npm run test:watch
```

## Coverage

```bash
npm run test:coverage
```

Coverage reports are generated in ./coverage.

## What Is Covered

- App shell and key section rendering.
- Navbar mobile-menu interaction.
- Contact section frontend-only form interaction.

## Adding More Tests

- Keep tests in ./tests.
- Focus on visible behavior and accessibility-friendly queries.
- Prefer role and label queries over brittle class selectors.
- Add interaction tests for new components when state changes are introduced.
