# HeyCar-UIKit - Typography

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The **Typography** component is used to display any types of text present on the **heycar-uikit** design system.

In the design prototypes, when clicking on text, you will find a variant name like `h1`, `subheading2`, `body4`. That's all that you need to get your text component ready.
Each variant contains already the expected font size, font weight, letter spacing, line height, and text transform.

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/typography
```

## Usage

```tsx
import Typography from '@heycar-uikit/Typography';

function App() {
  return <Typography variant="subheading2">Hello World</Typography>;
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-atoms-typography--typography) documentation and sandbox
