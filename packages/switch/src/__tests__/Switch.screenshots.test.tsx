import {
  createStorybookUrl,
  setupScreenshotTesting,
  screenshotHover,
  screenshotClick,
} from '../../../screenshotUtils';

const packageName = 'switch';
const selector = '#root label';

const clip = { x: 0, y: 0, width: 100, height: 50 };
const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

function testSwitchChecked(checked: boolean) {
  return screenshotTesting({
    cases: [
      [
        'sprite',
        createStorybookUrl({
          packageName,
          knobs: {
            checked: checked,
          },
        }),
      ],
    ],
    screenshotOpts: { clip },
  });
}

describe('Switch unchecked', testSwitchChecked(false));

describe('Switch checked', testSwitchChecked(true));

describe('Switch events tests', () => {
  test('hover when checked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: true,
      },
    });

    await screenshotHover(pageUrl, selector, { clip });
  });
  test('hover when unchecked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
      },
    });

    await screenshotHover(pageUrl, selector, { clip });
  });
  test('click when checked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: true,
      },
    });

    await screenshotClick(pageUrl, selector, { clip });
  });
  test('click when unchecked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
      },
    });

    await screenshotClick(pageUrl, selector, { clip });
  });
});
