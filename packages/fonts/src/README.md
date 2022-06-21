# HeyCar-UIKit - Fonts

The CSS and web font files to easily self-host the heycar web fonts. All fonts are in woff/woff2 format

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/fonts/hausschrift_objectiv

npm install @heycar-uikit/fonts/hausschrift_objectiv - it will import all list of the font.
npm install @heycar-uikit/fonts/hausschrift_objectiv/[200|300|400][500][normal][bold] will be imported only in particular weight of the font
```

Supported variables:

Weights: [200|300|400][500]
Styles: [normal][bold]

## Usage

Within your app entry file or site component, import it in.

```
import '@heycar-uikit/fonts';

```

You can reference the font name in a CSS stylesheet, CSS Module, or CSS-in-JS.

```

body {
  font-family: "Objektiv";
}

p {
     font-family: 'Objektiv';
}

h1 {
     font-family: 'Objektiv';
}
```
