import {
  createStorybookUrl,
  screenshotMatchClick,
  screenshotMatchHover,
  setupScreenshotTesting,
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

function testSwitch(checked: boolean, disabled: boolean) {
  return screenshotTesting({
    cases: [
      [
        'sprite',
        createStorybookUrl({
          packageName,
          knobs: {
            checked: checked,
            disabled: disabled,
          },
        }),
      ],
    ],
    screenshotOpts: { clip },
  });
}

describe('Switch unchecked', testSwitch(false, false));

describe('Switch checked', testSwitch(true, false));

describe('Switch unchecked and disabled', testSwitch(false, true));

describe('Switch checked and disabled', testSwitch(true, true));

describe('Switch events tests', () => {
  test('hover when checked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: true,
      },
    });

    await screenshotMatchHover(pageUrl, selector, { clip });
  });
  test('hover when unchecked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
      },
    });

    await screenshotMatchHover(pageUrl, selector, { clip });
  });
  test('hover when unchecked and disabled', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
        disabled: true,
      },
    });

    await screenshotMatchHover(pageUrl, selector, { clip });
  });
  test('click when checked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: true,
      },
    });

    await screenshotMatchClick(pageUrl, selector, { clip });
  });
  test('click when unchecked', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
      },
    });

    await screenshotMatchClick(pageUrl, selector, { clip }, 'down');
  });
  test('click when unchecked and disabled', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        checked: false,
        disabled: true,
      },
    });

    await screenshotMatchClick(pageUrl, selector, { clip });
  });
});
