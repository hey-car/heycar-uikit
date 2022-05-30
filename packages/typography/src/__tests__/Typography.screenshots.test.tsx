import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'typography';
const buttonVariants = ['display.1', 'h.1', 'h.2', 'h.3', 'h.4', 'h.5', 'h.6'];
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Typography variants',
  screenshotTesting({
    cases: buttonVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: 'typography text',
        },
      }),
    ]),
  }),
);
