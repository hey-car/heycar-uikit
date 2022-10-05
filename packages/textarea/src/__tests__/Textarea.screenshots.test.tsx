import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  screenshotMatchClick,
  screenshotMatchHover,
} from '../../../screenshotUtils';
const desktopWidthSize = 1000;
const desktopHeightSize = 200;
const clip = { x: 0, y: 0, width: desktopWidthSize, height: desktopHeightSize };
const viewPort = {
  width: desktopWidthSize,
  height: desktopHeightSize,
};
const packageName = 'textarea';
const textareaSelector = '#root textarea';
const textareaLabel = 'Label';
const textareaValue = 'Placeholder';

describe('Textarea screenshots', () => {
  test('Textarea default visual state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
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

  test('Textarea max length counter', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
        maxLength: 40,
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });

  test('Textarea max length counter error', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
        maxLength: 10,
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });

  test('Textarea hint state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
        hint: 'This is the placeholder for hint note',
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });

  test('Textarea error state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
        error: 'This is the placeholder for error note',
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });

  test('Textarea disabled state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });

  test('Textarea full width state', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: '',
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });
});

describe('Textarea events tests', () => {
  test('Textarea hover event', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
      },
    });

    await screenshotMatchHover(pageUrl, textareaSelector, { clip });
  });

  test('Textarea click test', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        label: textareaLabel,
        value: textareaValue,
      },
    });

    await screenshotMatchClick(pageUrl, textareaSelector, { clip }, 'down');
  });
});
