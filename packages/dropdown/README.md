# HeyCar-UIKit - Dropdown

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The Dropdown components use <select> element to create a drop-down list.
The <select> element is most often used in a form, to collect user input.

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/dropdown
```

## Usage

```tsx
import Dropdown from '@heycar-uikit/dropdown';

function App() {
  return (
    <div>
      <Dropdown id="marque" labelFor="marque" label="Marque label">
        <option value="Marque">Marque</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </Dropdown>
    </div>
  );
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-molecules-dropdown--dropdown) documentation and sandbox
