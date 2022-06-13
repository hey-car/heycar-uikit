import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';
import { defaultVariantMapping } from '../Typography.constants';

const packageName = 'typography';
const clip = { x: 0, y: 0, width: 500, height: 300 };
const buttonVariants = Object.keys(defaultVariantMapping);
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Typography',
  screenshotTesting({
    cases: buttonVariants.map(variant => [
      `variant ${variant}`,
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: 'typography text',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
