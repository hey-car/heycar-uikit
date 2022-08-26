import {
  createStorybookUrl,
  setupScreenshotTesting,
  screenshotMatchHover,
  screenshotMatchClick,
} from '../../../screenshotUtils';

const packageName = 'button';
const buttonSelector = '#root button';
const buttonLabel = 'Button CTA';
const buttonVariants = ['contained', 'outlined', 'link'];
const buttonColors = ['primary', 'tertiary'];
const buttonSizes = ['small', 'large'];
const clip = { x: 0, y: 0, width: 200, height: 100 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Button variants size=large',
  screenshotTesting({
    cases: buttonVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          size: 'large',
          children: buttonLabel,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Button sizes variant=outlined',
  screenshotTesting({
    cases: buttonSizes.map(size => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          size,
          variant: 'outlined',
          children: buttonLabel,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Button colors size=large',
  screenshotTesting({
    cases: buttonColors.map(color => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          color,
          size: 'large',
          children: buttonLabel,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe('Button events tests', () => {
  test('Button hover event', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    await screenshotMatchHover(pageUrl, buttonSelector, { clip });
  });

  test('Button click test', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    await screenshotMatchClick(pageUrl, buttonSelector, { clip });
  });
});
