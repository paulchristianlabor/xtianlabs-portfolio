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

## Visual-First QA Checklist

- Check mobile, tablet, and desktop layouts for no horizontal overflow.
- Confirm hero, destination, and gallery images load correctly.
- Verify spacing remains clean with no overlapping elements.
- Validate fast scan readability: short headings and 1-2 line blocks.

## Adding More Tests

- Keep tests in ./tests.
- Focus on visible behavior and accessibility-friendly queries.
- Prefer role and label queries over brittle class selectors.
- Add interaction tests for new components when state changes are introduced.
