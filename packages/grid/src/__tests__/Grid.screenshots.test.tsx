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
const clip = { x: 0, y: 0, width: 1200, height: 100 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Row justified align=stretch reverse=false',
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
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row aligned justify=start reverse=false',
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
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'Row reversed justify=start align=stretch',
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
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
