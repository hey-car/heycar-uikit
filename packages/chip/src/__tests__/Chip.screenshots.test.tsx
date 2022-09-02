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

describe(
  'Chip children',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: 'Test children',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Chip data-test-id',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
          dataTestId: 'test id',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Chip Component',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Component: 'span',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Chip disabled',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
          disabled: true,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Chip selected',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
          selected: true,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Chip leftIcon',
  screenshotTesting({
    cases: chipVariants.map(variant => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          variant,
          children: chipLabel,
          leftIcon: 'leftIcon',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
