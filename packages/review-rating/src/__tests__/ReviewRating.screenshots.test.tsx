import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'review-rating';

const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const clip = { x: 0, y: 0, width: 500, height: 200 };
// the svg "donut" renders slightly different at its edges on different devices. the blur gets around that
const blur = 2;

const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'ReviewRating variants size=XS',
  screenshotTesting({
    cases: scores.map(score => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          score,
          size: 'XS',
        },
      }),
    ]),
    screenshotOpts: {
      clip,
      animations: 'disabled',
    },
    matchImageSnapshotOptions: { blur },
  }),
);

describe(
  'ReviewRating variants size=S',
  screenshotTesting({
    cases: scores.map(score => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          score,
          size: 'S',
        },
      }),
    ]),
    screenshotOpts: { clip, animations: 'disabled' },
    matchImageSnapshotOptions: { blur },
  }),
);

describe(
  'ReviewRating variants size=M',
  screenshotTesting({
    cases: scores.map(score => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          score,
          size: 'M',
        },
      }),
    ]),
    screenshotOpts: { clip, animations: 'disabled' },
    matchImageSnapshotOptions: { blur },
  }),
);

describe(
  'ReviewRating variants size=L',
  screenshotTesting({
    cases: scores.map(score => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          score,
          size: 'L',
        },
      }),
    ]),
    screenshotOpts: { clip, animations: 'disabled' },
    matchImageSnapshotOptions: { blur },
  }),
);
