import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'switch';

const clip = { x: 0, y: 0, width: 200, height: 100 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Switch',
  screenshotTesting({
    cases: [['sprite', createStorybookUrl({ packageName })]],
    screenshotOpts: { clip },
  }),
);
