# HeyCar-UIKit - Header

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Header wraps top-level navigation and branding.

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/header
```

## Usage

```tsx
import Header from '@heycar-uikit/header';

function App() {
  const nav = [
    {
      label: 'Buy online',
      href: '/buy-online',
    },
    {
      label: 'Car reviews',
      subNavGroups: [
        {
          heading: 'Popular cars',
          items: [
            {
              label: 'Audi Q3 Sportback',
              href: '#Audi-Q3-Sportback',
            },
            {
              label: 'Audi A1',
              href: '#Audi-a1',
            },
            {
              label: 'BMW 3 Series',
              href: '#BMW-3-Series',
            },
          ],
        },
      ],
    },
  ];

  render(<Header logoHref="https://heycar.com" navigation={nav} />);
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-organisms-header--header) documentation and sandbox
