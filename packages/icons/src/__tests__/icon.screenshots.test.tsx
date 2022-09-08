import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'icons';
const iconColors = ['primary', 'secondary', 'tertiary'];
const clip = { x: 0, y: 0, width: 1200, height: 800 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Icon colors',
  screenshotTesting({
    cases: iconColors.map(color => [
      'icon',
      createStorybookUrl({
        packageName,
        knobs: {
          color,
          size: 24,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
