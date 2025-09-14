# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo containing `@sect/solid-hiding-header`, a SolidJS component library that provides hiding header functionality on scroll. It's a port of the React version, wrapping the vanilla `hiding-header` library with SolidJS-specific components and context.

## Development Commands

**Monorepo Commands (run from root):**
- `pnpm dev` - Start development for all packages
- `pnpm build` - Build all packages
- `pnpm test` - Run tests across all packages
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:e2e` - Run E2E tests (Playwright) for demo app
- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Fix linting issues
- `pnpm type-check` - TypeScript type checking across all packages
- `pnpm clean` - Clean all build artifacts and node_modules

**Single Test Commands:**
- In `packages/solid-hiding-header/`: `pnpm test` (Vitest)
- In `apps/solidjs-boilerplate/`: `pnpm test:e2e` (Playwright)

## Architecture

### Monorepo Structure
- `packages/solid-hiding-header/` - The main library package
- `apps/solidjs-boilerplate/` - Demo application showcasing the library
- Uses Turborepo for build orchestration and pnpm workspaces

### Library Architecture (`packages/solid-hiding-header/`)
- **Main Component**: `HidingHeader` - Wraps content and provides hiding functionality
- **Context System**: Provides access to hiding header controls via React-like context pattern
- **Hooks**: `useHidingHeader`, `useRunHidingHeader`, `usePauseHidingHeader`, etc.
- **Core Dependency**: Built on top of `hiding-header` vanilla JavaScript library
- **Build**: Uses Rollup with `rollup-preset-solid` for multiple output formats (ESM, CJS, types)

### Demo App Architecture (`apps/solidjs-boilerplate/`)
- **Framework**: SolidJS with TypeScript
- **Styling**: TailwindCSS v4
- **Routing**: @solidjs/router
- **State**: SolidJS signals and stores
- **Build**: Vite with vite-plugin-solid
- **Testing**: Vitest for unit tests, Playwright for E2E

## Key Development Details

### CSS Requirements
The library requires importing CSS from the `hiding-header` package:
```css
@import 'node_modules/hiding-header/dist/style.css';
```

### Workspace Dependencies
The demo app uses the library via workspace reference:
```json
"@sect/solid-hiding-header": "workspace:*"
```

### Component Usage Pattern
```tsx
import { HidingHeader } from '@sect/solid-hiding-header';

// Basic usage
<HidingHeader>
  <header>Content</header>
</HidingHeader>

// With custom component
<HidingHeader component="header">
  <div>Content</div>
</HidingHeader>
```

### Testing Approach
- **Unit Tests**: Vitest with SolidJS Testing Library
- **E2E Tests**: Playwright for full integration testing
- **Coverage**: Available via `pnpm coverage`

### Code Quality
- **ESLint**: Airbnb TypeScript config with SolidJS plugin
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks with lint-staged
- **Commitlint**: Conventional commit messages
- **TypeScript**: Strict type checking enabled

### Release Process
- Uses Changesets for version management
- `pnpm changeset` - Create changeset
- `pnpm version-packages` - Update versions
- `pnpm release` - Build and publish to npm