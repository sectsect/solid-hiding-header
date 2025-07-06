# Changelog

## 2.0.28

### Patch Changes

- [`c713933`](https://github.com/sectsect/solid-hiding-header/commit/c7139331a52b319be1892bcf21aff5a175dd950c) Thanks [@sectsect](https://github.com/sectsect)! - .
  - chore(deps): update dependencies
  - docs: update README.md
  - chore(deps): update dependencies
  - chore: remove eslint-plugin-tailwindcss for Tailwind CSS v4
  - chore: migrate config files to ESModule format
  - fix: resolve ESLint errors and deprecation warnings
  - fix: resolve stylelint errors
  - ci: fix pnpm version error

## 2.0.27

### Patch Changes

- [`49a5c74`](https://github.com/sectsect/solid-hiding-header/commit/49a5c747884c978087eb6e5748befe62a08ef9cc) Thanks [@sectsect](https://github.com/sectsect)! - .
  - Potential fix for code scanning alert no. 1: Workflow does not contain permissions
  - perf(turbo): enable e2e test caching with outputs and env vars
  - fix(ci): update workflow permissions for changesets action

## 2.0.26

### Patch Changes

- [#43](https://github.com/sectsect/solid-hiding-header/pull/43) [`a264411`](https://github.com/sectsect/solid-hiding-header/commit/a264411d3f939c605faf840aecb582839097b38d) Thanks [@sectsect](https://github.com/sectsect)! - .
  - feat(e2e): add playwright show-report script
  - ci(release): add playwright report upload as artifact

## 2.0.25

### Patch Changes

- [#40](https://github.com/sectsect/solid-hiding-header/pull/40) [`dfe8f35`](https://github.com/sectsect/solid-hiding-header/commit/dfe8f351864dd38d1dcc096b01482a076bccbc58) Thanks [@sectsect](https://github.com/sectsect)! - .
  - chore(deps): update dependencies
  - fix: resolve test failures after dependency updates
  - fix(e2e): remove playwright test from library package
  - test: expand test suites to achieve full coverage
  - chore(deps): update dependencies
  - fix(lint): update eslint-plugin-solid to resolve TSAsExpression error
  - chore(deps): update dependencies
  - chore: update tailwindcss config before migrate to v4
  - chore(deps): migrate to tailwindcss v4
  - fix(deps): downgrade msw to 2.3.1 for vite 6 compatibility
  - fix: resolve TypeScript module resolution errors
  - ci(workflows): align pnpm version with package.json

## 2.0.24

### Patch Changes

- [#37](https://github.com/sectsect/solid-hiding-header/pull/37) [`2032417`](https://github.com/sectsect/solid-hiding-header/commit/20324175f1f4b2e78c8c16ca44627564f4364fbf) Thanks [@sectsect](https://github.com/sectsect)! - .
  - chore: update vite to v5.3.x
  - chore: bump pnpm version
  - chore: update vitest to v2.x.x
  - chore(deps): update dependencies
  - ci(husky): update hooks following v9 deprecations
  - ci: update GitHub Actions workflow

## 2.0.23

### Patch Changes

- [`b863421`](https://github.com/sectsect/solid-hiding-header/commit/b86342100997c943e03ccf7306eb6d93a0726fcc) Thanks [@sectsect](https://github.com/sectsect)! - add testing for component 'PostContent'
  - add testing for component 'PostContent'
  - add testing for component 'PostList'

## 2.0.22

### Patch Changes

- [`8a58767`](https://github.com/sectsect/solid-hiding-header/commit/8a5876723c78f65c3041d4eb94737aee1e10772f) Thanks [@sectsect](https://github.com/sectsect)! - Add mock for testing / update Turborepo to v2.x.x
  - test: added mocking api response to test
  - refactor(app): code refactor
  - chore: update turbo to v2

## 2.0.21

### Patch Changes

- [`478e30a`](https://github.com/sectsect/solid-hiding-header/commit/478e30aa55e09b81acaf455d9d55bb6d2a636b18) Thanks [@sectsect](https://github.com/sectsect)! - add testing for response 500 error
  - add package msw to mock the API response

## 2.0.20

### Patch Changes

- [`512e3d4`](https://github.com/sectsect/solid-hiding-header/commit/512e3d4b974091d9a382aba5b436bda4ef823993) Thanks [@sectsect](https://github.com/sectsect)! - migrate '@solidjs/router' to v0.13.x
  - chore: update '@solidjs/router' to v0.13.3
  - test: add support for tests on '@solidjs/router' v0.13.x or higher
  - chore: add missing package 'postcss-nesting'

## 2.0.19

### Patch Changes

- [`ca32fd3`](https://github.com/sectsect/solid-hiding-header/commit/ca32fd3cf0ff45ce1b3918b23f6f71f1c972e951) Thanks [@sectsect](https://github.com/sectsect)! - Reapply "ci: update CI workflow"

## 2.0.18

### Patch Changes

- [`de4926d`](https://github.com/sectsect/solid-hiding-header/commit/de4926d96a7e095041540361851d766ecf2127a8) Thanks [@sectsect](https://github.com/sectsect)! - Revert "ci: update CI workflow"

## 2.0.17

### Patch Changes

- [`9354afc`](https://github.com/sectsect/solid-hiding-header/commit/9354afc9101c993ea904fb693d213e5b74c184e7) Thanks [@sectsect](https://github.com/sectsect)! - Minor bug fix
  - ci: update CI workflow
  - fix: add missing method to destroy instance in cleanup function
  - ci: fix error in workflow

## 2.0.16

### Patch Changes

- [`020a629`](https://github.com/sectsect/solid-hiding-header/commit/020a629f18f2d68b2653caae971b66579d6a8e4e) Thanks [@sectsect](https://github.com/sectsect)! - improve for tests
  - chore: replace deprecated extension in recommendations
  - chore: update dependencies for Vitest
  - test: enhance tests

## 2.0.15

### Patch Changes

- [`2d4b7c9`](https://github.com/sectsect/solid-hiding-header/commit/2d4b7c9bacd668b95619662e0568b090db19b34e) Thanks [@sectsect](https://github.com/sectsect)! - - chore: update dependencies
  - chore: update packageManager version in package.json
  - chore: update turbo
  - ci: update CI workflow
  - ci: remove packageManager in package.json

## 2.0.14

### Patch Changes

- [`6e3c07e`](https://github.com/sectsect/solid-hiding-header/commit/6e3c07ef47e1c306ce02f28c23d4cad6785f0183) Thanks [@sectsect](https://github.com/sectsect)! - update dependencies

## 2.0.13

### Patch Changes

- [`7459076`](https://github.com/sectsect/solid-hiding-header/commit/745907630350312a5ae4f5bf0fd4cfcf6765f58d) Thanks [@sectsect](https://github.com/sectsect)! - update 'tanstack/solid-query' to v5 / update dependencies

## 2.0.12

### Patch Changes

- [`013e812`](https://github.com/sectsect/solid-hiding-header/commit/013e81263bbc566fe74103e02077b0451c629e49) Thanks [@sectsect](https://github.com/sectsect)! - update dependencies

## 2.0.11

### Patch Changes

- [`fbee00a`](https://github.com/sectsect/solid-hiding-header/commit/fbee00a64c344d6a2eeb09bfd41c5e7ef499be1a) Thanks [@sectsect](https://github.com/sectsect)! - migrate vitest to v1

## 2.0.10

### Patch Changes

- [`36f2ea9`](https://github.com/sectsect/solid-hiding-header/commit/36f2ea92627434daa8139df645e14b30b5d7b351) Thanks [@sectsect](https://github.com/sectsect)! - update Turborepo to v1.11.x / update dependencies

## 2.0.9

### Patch Changes

- [`065bd7b`](https://github.com/sectsect/solid-hiding-header/commit/065bd7b284473d67fc65fd806978628aa1997171) Thanks [@sectsect](https://github.com/sectsect)! - upgrade GitHub Actions workflows from Node 12

## 2.0.8

### Patch Changes

- [`756236b`](https://github.com/sectsect/solid-hiding-header/commit/756236bccae8e32b5b3949ecea792890db8c981c) Thanks [@sectsect](https://github.com/sectsect)! - add package 'eslint-plugin-deprecation'

## 2.0.7

### Patch Changes

- [`7d7d477`](https://github.com/sectsect/solid-hiding-header/commit/7d7d4779be5b6520c7ea668cf44e5cae2116c8a1) Thanks [@sectsect](https://github.com/sectsect)! - update dependencies

## 2.0.6

### Patch Changes

- [`81a6fd0`](https://github.com/sectsect/solid-hiding-header/commit/81a6fd0f3efcef70f3c55ac41cd0a50bfc54b235) Thanks [@sectsect](https://github.com/sectsect)! - update dependencies

## 2.0.5

### Patch Changes

- [`0828588`](https://github.com/sectsect/solid-hiding-header/commit/0828588212b87106db322549d1c62fa4c0c69cd0) Thanks [@sectsect](https://github.com/sectsect)! - setup turbo remote caching

- [`fae96cc`](https://github.com/sectsect/solid-hiding-header/commit/fae96cca64e60a9d10708e28c1277eff6ac1908d) Thanks [@sectsect](https://github.com/sectsect)! - optimize dependencies in pipeline on Turborepo

## 2.0.4

### Patch Changes

- [`2cba6ef`](https://github.com/sectsect/solid-hiding-header/commit/2cba6ef0b8f65b72610de76f36400bdf36576a6c) Thanks [@sectsect](https://github.com/sectsect)! - add '@changesets/changelog-github' to enhance CHANGELOG

## 2.0.3

### Patch Changes

- 850acb5: update dependencies
- 21a6d88: update Playwright to v1.37.1

## 2.0.2

### Patch Changes

- 5036350: update README.md / code cleanup / remove an unwanted package / update package.json
- c5eee8b: optimize cache handling on Turborepo

## 2.0.1

### Patch Changes

- 7d2e532: update README.md

## 2.0.0

### Major Changes

- 824e113: migrate to monorepo

## [1.5.1](https://github.com/sectsect/solid-hiding-header/tree/1.5.1) (2023-08-19)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.5.0...1.5.1)

## [1.5.0](https://github.com/sectsect/solid-hiding-header/tree/1.5.0) (2023-08-19)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.4.1...1.5.0)

## [1.4.1](https://github.com/sectsect/solid-hiding-header/tree/1.4.1) (2023-04-20)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.4.0...1.4.1)

## [1.4.0](https://github.com/sectsect/solid-hiding-header/tree/1.4.0) (2023-04-20)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.3.1...1.4.0)

## [1.3.1](https://github.com/sectsect/solid-hiding-header/tree/1.3.1) (2023-04-03)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.3.0...1.3.1)

## [1.3.0](https://github.com/sectsect/solid-hiding-header/tree/1.3.0) (2023-04-02)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.2.1...1.3.0)

## [1.2.1](https://github.com/sectsect/solid-hiding-header/tree/1.2.1) (2023-03-20)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.2.0...1.2.1)

## [1.2.0](https://github.com/sectsect/solid-hiding-header/tree/1.2.0) (2023-03-18)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.5...1.2.0)

## [1.1.5](https://github.com/sectsect/solid-hiding-header/tree/1.1.5) (2023-02-08)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.4...1.1.5)

## [1.1.4](https://github.com/sectsect/solid-hiding-header/tree/1.1.4) (2023-01-14)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.3...1.1.4)

## [1.1.3](https://github.com/sectsect/solid-hiding-header/tree/1.1.3) (2023-01-13)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.2...1.1.3)

## [1.1.2](https://github.com/sectsect/solid-hiding-header/tree/1.1.2) (2023-01-13)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.1...1.1.2)

## [1.1.1](https://github.com/sectsect/solid-hiding-header/tree/1.1.1) (2023-01-13)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.1.0...1.1.1)

## [1.1.0](https://github.com/sectsect/solid-hiding-header/tree/1.1.0) (2023-01-12)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.0.2...1.1.0)

## [1.0.2](https://github.com/sectsect/solid-hiding-header/tree/1.0.2) (2023-01-10)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.0.1...1.0.2)

**Merged pull requests:**

- chore: fix README.md typo [\#1](https://github.com/sectsect/solid-hiding-header/pull/1) ([FilipChalupa](https://github.com/FilipChalupa))

## [1.0.1](https://github.com/sectsect/solid-hiding-header/tree/1.0.1) (2023-01-10)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/1.0.0...1.0.1)

## [1.0.0](https://github.com/sectsect/solid-hiding-header/tree/1.0.0) (2023-01-10)

[Full Changelog](https://github.com/sectsect/solid-hiding-header/compare/04ef2ad839ec935392b687dfe7503e09ab5740d5...1.0.0)

\* _This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)_
