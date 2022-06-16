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
const gapOptions = [
  0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64,
];
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
        moduleName: 'row',
        knobs: {
          justify,
          align: 'stretch',
          reverse: false,
          rowGap: [0],
          columnGap: [0],
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
        moduleName: 'row',
        knobs: {
          align,
          justify: 'start',
          reverse: false,
          rowGap: [0],
          columnGap: [0],
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
        moduleName: 'row',
        knobs: {
          reverse,
          align: 'stretch',
          justify: 'start',
          rowGap: [0],
          columnGap: [0],
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
        moduleName: 'row',
        knobs: {
          rowGap: [gap],
          align: 'stretch',
          justify: 'start',
          reverse: false,
          columnGap: [0],
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
        moduleName: 'row',
        knobs: {
          columnGap: [gap],
          align: 'stretch',
          justify: 'start',
          reverse: false,
          rowGap: [0],
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
