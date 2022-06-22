# HeyCar-UIKit - Themes

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/themes
```

## Usage

```tsx
// MyApp.js
import '@heycar-uikit/themes/default.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

```tsx
// Button.styles.js

const styles = {
  button: {
    color: 'var(--color-primary-500)',
    padding: 'var(--gap-m) var(--gap-s)',
  },
};

export default styles;
```

## Colors

Listed below are all of the color names and their following possible shades
available as CSS variables on this design system.

In order to use the colors of the **heycar-uikit** design system as
CSS variables, start the name of the variable with `--color`, followed by
the color name that you want (e.g. `-primary`, `-success`) and the shade
value (e.g. `-50`, `-600`).

If you need to use **brand colors**, simply use the variable name described right below their names on the palette below.

You can find a few examples on the code block to follow:

```css
.exampleClass {
  background-color: var(--color-primary-50);
  color: var(--color-secondary-500);
}

.anotherExampleClass {
  background: var(--color-secondary-200);
  box-shadow: 10px 5px 5px var(--color-success-400);
}

.exampleWithBrandColor {
  color: var(--color-heycar-mint);
  background: var(--color-primary-50);
  border: 1px solid var(--color-mica-blue);
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/guidelines-theme--colors) documentation and sandbox
