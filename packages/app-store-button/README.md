# HeyCar-UIKit - App Store Button

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

App store badges for iOS and Android

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/core

# Or
npm install @heycar-uikit/app-store-button
```

## Usage

```tsx
// TSX/JSX file
// Core import is recomended
import AppStoreButton from '@heycar-uikit/core/app-store-button';

// or
import AppStoreButton from '@heycar-uikit/app-store-button';

function App() {
  return (
    <div>
      <AppStoreButton
        href="https://apps.apple.com/uk/app/heycar/id1490142063"
        lang="en-EN"
        store="apple"
      />
      <AppStoreButton
        href="https://play.google.com/store/apps/details?id=com.mobility_trader_gmbh.heycar"
        lang="en-EN"
        store="google"
      />
    </div>
  );
}
```

```css
// CSS file
// Core import is recomended
@import '@heycar-uikit/core/app-store-button/esm/AppStoreButton.css';

// or
@import '@heycar-uikit/app-store-button/dist/esm/AppStoreButton.css';
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-molecules-appstorebutton--app-store-button) documentation and sandbox
