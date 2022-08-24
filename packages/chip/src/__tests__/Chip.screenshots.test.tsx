import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'chip';
const chipLabel = 'Chip CTA';
const chipVariants = ['filter', 'choice'];
const clip = { x: 0, y: 0, width: 200, height: 100 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Chip variants',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
