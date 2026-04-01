# Static Deployment Guide

## Build Output

Run:

```bash
pnpm run build
```

The static deployable files are generated in ./dist.

## Supported Static Hosting Platforms

- GitHub Pages
- Netlify
- Vercel (static output mode)
- Cloudflare Pages
- Firebase Hosting (static)

## Generic Deployment Steps

1. Install dependencies with pnpm install.
2. Build with pnpm run build.
3. Upload the ./dist folder to your chosen static host.
4. Configure fallback behavior only if you add multi-route client routing later.

## Deployment Cautions

- Ensure no secrets are embedded in frontend code.
- Keep asset paths internal and relative.
- Re-run lint, tests, and build checks before deployment.
