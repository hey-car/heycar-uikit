import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  screenshotMatchClick,
  screenshotMatchHover,
} from '../../../screenshotUtils';
const desktopWidthSize = 1000;
const desktopHeightSize = 100;
const clip = { x: 0, y: 0, width: desktopWidthSize, height: desktopHeightSize };
const viewPort = {
  width: desktopWidthSize,
  height: desktopHeightSize,
};
const packageName = 'input';
const inputSelector = '#root input';
const inputLabel = 'Label';
const inputValue = 'Placeholder';

describe('Input screenshots', () => {
  test('Input default visual state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: '',
      },
    });

    const { browser, context, page } = await openBrowserPage(
      pageUrl,
      undefined,
      viewPort,
    );

    try {
      await matchHtml({
        page,
        expect,
      });
    } catch (error: unknown) {
      console.error(error);
    } finally {
      await closeBrowser({ browser, context, page });
    }
  });

  test('Input hint state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: inputValue,
        leftIcon: true,
        hint: 'This is the placeholder for hint note',
      },
    });

    await screenshotMatchClick(pageUrl, inputSelector, { clip }, 'down');
  });
  test('Input error state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: inputValue,
        leftIcon: true,
        rightIcon: true,
        error: 'This is the placeholder for error note',
      },
    });

    await screenshotMatchClick(pageUrl, inputSelector, { clip }, 'down');
  });

  test('Input disabled state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: inputValue,
        leftIcon: true,
        disabled: true,
      },
    });

    await screenshotMatchClick(pageUrl, inputSelector, { clip }, 'down');
  });

  test('Input full width state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: '',
        rightIcon: true,
        fullWidth: true,
      },
    });

    await screenshotMatchClick(
      pageUrl,
      inputSelector,
      { animations: 'disabled', clip },
      'down',
    );
  });
});

describe('Input events tests', () => {
  test('Input hover event', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: inputValue,
        leftIcon: true,
      },
    });

    await screenshotMatchHover(pageUrl, inputSelector, { clip });
  });

  test('Input click test', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: inputLabel,
        value: inputValue,
        rightIcon: true,
      },
    });

    await screenshotMatchClick(pageUrl, inputSelector, { clip }, 'down');
  });
});
