import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';
import {screenshotHover} from "../../../screenshotUtils/screenshotHover";

const packageName = 'switch';
const selector = '#root label';

const clip = { x: 0, y: 0, width: 100, height: 50 };
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

describe('Switch events tests', () => {
  test('Switch hover event', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });
    await screenshotHover(pageUrl, selector, { clip });
  });

});
