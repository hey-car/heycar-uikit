# HeyCar-UIKit - Icons

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/icons
```

## Usage

Semantic vector graphics. Before using icons, you need to install import icons using one of these two options:

- Option 1:

```tsx
import CarIcon from '@heycar-uikit/icons/Car';
import CloseIcon from '@heycar-uikit/icons/Close';

function App() {
  return (
    <div>
      <Button
        leftIcon={<CarIcon />}
        size="large"
        color="primary"
        variant="outlined"
      >
        Hello World
      </Button>
      <CloseIcon />
    </div>
  );
}
```

- Option 2:

```tsx
import { Car, Close } from '@heycar-uikit/icons';

function App() {
  return (
    <div>
      <Button
        leftIcon={<CarIcon />}
        size="large"
        color="primary"
        variant="outlined"
      >
        Hello World
      </Button>
      <CloseIcon />
    </div>
  );
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-icons--icons) documentation and sandbox.
