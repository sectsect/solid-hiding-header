<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=@sect/solid-hiding-header&background=tiles&project=%20" alt="@sect/solid-hiding-header">
</p>

# @sect/solid-hiding-header

[![CodeQL](https://github.com/sectsect/solid-hiding-header/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/sectsect/solid-hiding-header/actions/workflows/github-code-scanning/codeql) [![npm version](https://badge.fury.io/js/@sect%2Fsolid-hiding-header.svg)](https://badge.fury.io/js/@sect%2Fsolid-hiding-header) ![NPM](https://img.shields.io/npm/l/@sect/solid-hiding-header)

Forked from [Hiding Header React](https://github.com/FilipChalupa/hiding-header-react) by [Filip Chalupa](https://github.com/FilipChalupa).

## Demo
Toggles header visibility on scroll. [Demo](https://filipchalupa.cz/hiding-header/demo).

![UI example](https://raw.githubusercontent.com/FilipChalupa/hiding-header/HEAD/screencast.gif)

## Quick start

Install it:

```bash
npm i @sect/solid-hiding-header
# or
yarn add @sect/solid-hiding-header
# or
pnpm add @sect/solid-hiding-header
```

### CSS:

Import `node_modules/hiding-header/dist/style.css` to your CSS. It's few lines of code. You can alternatively copy paste it and adjust things like `z-index` to your needs.

## Usage Example

```tsx
import { HidingHeader } from '@sect/solid-hiding-header';

const Header: Component = () => {
  return (
    <HidingHeader>
      <header class="py-5">
        <div class="inner">
          Put your content here
        </div>
      </header>
    </HidingHeader>
  );
};
```

### Allow Top Level HTML `<header>` tag
```tsx
const Header: Component = () => {
  return (
    <HidingHeader component="header">
      <div class="inner py-5">
        Put your content here
      </div>
    </HidingHeader>
  );
};
```

See Core API docs for more options.  
https://github.com/FilipChalupa/hiding-header/blob/main/README.md

## Changelog 

See [CHANGELOG](https://github.com/sectsect/solid-hiding-header/blob/master/CHANGELOG.md) file.

## License

See [LICENSE](https://github.com/sectsect/solid-hiding-header/blob/main/LICENSE) file.

<p align="center">✌️</p>
<p align="center">
<sub><sup>A little project by <a href="https://github.com/sectsect">@sectsect</a></sup></sub>
</p>
