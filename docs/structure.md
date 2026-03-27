# Project Structure

## Top-Level

- ./src: Application source code
- ./public: Static public assets
- ./tests: Vitest test suites
- ./docs: Supporting project documentation

## Source Layers

- ./src/components: Reusable UI and section components
- ./src/components/ui: Shared design-system primitives
- ./src/components/sections: Website sections (hero, gallery, contact, etc.)
- ./src/layouts: High-level page shell and shared layout wrappers
- ./src/views: Composed page-level views
- ./src/assets/images: Local image assets used by sections
- ./src/styles: Global stylesheet and Tailwind directives
- ./src/data: Typed static content structures
- ./src/composables: Reusable Composition API logic
- ./src/utils: Small utility modules (for example safe link attributes)
- ./src/router: Reserved for optional future routing

## Why This Organization

- Keeps sections modular and easy to test.
- Separates visual primitives from content sections.
- Uses typed data files so placeholder content is easy to replace.
- Supports static deployment without backend dependencies.
