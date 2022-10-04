# HeyCar-UIKit - Grid

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

12 column grid system that consists of 2 components, `Row` and `Column`.

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/grid
```

## Usage

```tsx
import Grid from '@heycar-uikit/grid';

function App() {
  return (
    <Grid.Row>
      <Grid.Col width={{ mobile: 12, tablet: 12, desktop: 4 }}>
        <div />
      </Grid.Col>
      <Grid.Col width={{ mobile: 12, tablet: 6, desktop: 4 }}>
        <div />
      </Grid.Col>
      <Grid.Col width={{ mobile: 12, tablet: 6, desktop: 4 }}>
        <div />
      </Grid.Col>
    </Grid.Row>
  );
}
```

## Breakpoints

| Name          | Value          |
| ------------- | -------------- |
| `--mobile`    | 0 to 767px     |
| `--tablet`    | 768px to 100%  |
| `--tablet-s`  | 768px to 100%  |
| `--tablet-l`  | 1024px to 100% |
| `--desktop`   | 1280px to 100% |
| `--desktop-s` | 1280px to 100% |
| `--desktop-m` | 1366px to 100% |
| `--desktop-l` | 1440px to 100% |

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-grid--grid) documentation and sandbox
