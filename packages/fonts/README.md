# HeyCar-UIKit - Fonts

The CSS and web font files to easily self-host the heycar web fonts. All fonts are in woff/woff2 format

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/fonts
npm install @heycar-uikit/fonts/[200|300|500] // to be imported only in particular weight of the font
```

Supported variables: [200|300|500] will be imported only in particular weight of the font

It's as simple as importing it globally into \_app.jsx or \_app.tsx. Alternatively, you could choose to import it into a page component, however, the CSS will only be present within the page and not globally.

```
import "@heycar-uikit/fonts";
import "@heycar-uikit/fonts/700.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

And apply to elements like this

```
body {
  font-family: "Objektiv", sans-serif;
}
```
