import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'grid';
const justifyOptions = [
  'start',
  'end',
  'center',
  'space-between',
  'space-evenly',
  'space-around',
];
const alignOptions = ['start', 'end', 'center', 'stretch', 'baseline'];
const reverseOptions = [true, false];
const gapOptions = [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64];
const clip = { x: 0, y: 0, width: 1200, height: 200 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Row justified align=stretch reverse=false rowGap=0 columnGap=0',
  screenshotTesting({
    cases: justifyOptions.map(justify => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          justify,
          align: 'stretch',
          reverse: false,
          ['rowGap.sm']: 0,
          ['columnGap.sm']: 0,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row aligned justify=start reverse=false rowGap=0 columnGap=0',
  screenshotTesting({
    cases: alignOptions.map(align => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          align,
          justify: 'start',
          reverse: false,
          ['rowGap.sm']: 0,
          ['columnGap.sm']: 0,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row reversed justify=start align=stretch rowGap=0 columnGap=0',
  screenshotTesting({
    cases: reverseOptions.map(reverse => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          reverse,
          align: 'stretch',
          justify: 'start',
          ['rowGap.sm']: 0,
          ['columnGap.sm']: 0,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row with row gap justify=start align=stretch reverse=false columnGap=0',
  screenshotTesting({
    cases: gapOptions.map(gap => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          ['rowGap.sm']: gap,
          ['rowGap.md']: gap,
          ['rowGap.lg']: gap,
          ['rowGap.xl']: gap,
          align: 'stretch',
          justify: 'start',
          reverse: false,
          ['columnGap.sm']: 0,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row with column gap justify=start align=stretch reverse=false rowGap=0',
  screenshotTesting({
    cases: gapOptions.map(gap => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          ['columnGap.sm']: gap,
          ['columnGap.md']: gap,
          ['columnGap.lg']: gap,
          ['columnGap.xl']: gap,
          align: 'stretch',
          justify: 'start',
          reverse: false,
          ['rowGap.sm']: 0,
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
