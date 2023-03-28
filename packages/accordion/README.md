# HeyCar-UIKit - Accordion

[![Tests](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/hey-car/heycar-uikit/badge.svg)](https://coveralls.io/github/hey-car/heycar-uikit)
[![Demo build](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml/badge.svg)](https://github.com/hey-car/heycar-uikit/actions/workflows/main.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

The accordion component allows the user to show and hide sections of related content on a page.

## Installation

To install and save in your package.json dependencies, run the command below using npm:

```bash
npm install @heycar-uikit/accordion
```

## Usage

```tsx
import Accordion from '@heycar-uikit/accordion';

function App() {
  return (
    <div>
      <Accordion title="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit">
        You’ll struggle to find any objective reasons to buy a Q3 Sportback over
        the standard Audi Q3. But, if you want to stand out, the Sportback is
        rarer than the regular car and barely any more expensive on the used
        market. It’s cheap to run - and it’s more practical than you might
        expect. Combine that with low running costs and a strong engine line-up
        (including the 1.5 mild-hybrid petrol), and the Q3 Sportback gets easier
        to justify.
      </Accordion>
      <Accordion disabled title="Exmplae of disabled accordion">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </Accordion>
      <Accordion title="What’s the best Audi Q3 Sportback model/engine to choose">
        We reckon the most affordable engine in the Q3 Sportback is actually the
        one to go for. The 1.5 TFSI is quick enough for most drivers, cheap to
        run and available with a manual or S tronic automatic transmission. An
        automatic gearbox is desirable in a car like this but it can be a bit
        hesitant, so don’t dismiss the manual. In terms of trim levels, the Q3
        Sportback will look sharper and get more equipment if you opt for one of
        the pricier models, but the standard Sport model has pretty much
        everything you could possibly wish for. In typical Audi form, the Q3
        Sportback is at its most comfortable on the smallest wheels - the
        18-inch alloys fitted to Sport models.
      </Accordion>
      <Accordion title="What other cars are similar to the Audi Q3 Sportback?">
        The BMW X2 is the Q3 Sportback’s main rival - based on the X1 with
        sleeker looks and a less practical cabin. We’d be very tempted by the
        Volvo XC40, which is a trendy small SUV with a brilliant interior, while
        the latest Range Rover Evoque is another solid alternative (although
        don’t be tempted by the old model, replaced in 2019). If practicality’s
        what you want, look at the standard Audi Q3 instead, or the very similar
        (but less premium) Volkswagen Tiguan. Then there are left-field
        alternatives like the Lexus NX and even the bigger DS 7 Crossback.
      </Accordion>
    </div>
  );
}
```

## Documentation and sandbox

[Storybook](https://hey-car.github.io/heycar-uikit/main/?path=/docs/components-molecules-accordion--accordion) documentation and sandbox
