import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'pill';
const pillLabel = 'Pill CTA';
const clip = { x: 0, y: 0, width: 200, height: 100 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Pill',
  screenshotTesting({
    cases: ['pill'].map(() => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          children: pillLabel,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Pill component',
  screenshotTesting({
    cases: ['pill-component'].map(() => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          children: pillLabel,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Component: 'span',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
