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
import { Row, Column } from '@heycar-uikit/grid';

function App() {
  return (
    <Row>
      <Column widths={[12, 6, 5, 4]}>
        Some content
      </Column>
      <Column widths={[12, 6, 7, 8]}>
        <p>Some other content</p>
      </Column>
    </Row>
  );
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-grid--row) documentation and sandbox
