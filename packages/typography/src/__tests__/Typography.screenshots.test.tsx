import {
  closeBrowser,
  createStorybookUrl,
  matchHtml,
  openBrowserPage,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

const packageName = 'typography';

describe(
  'Typography',
  screenshotTesting({
    cases: [
      [
        'sprite',
        createStorybookUrl({
          packageName,
          knobs: {
            children: 'text example',
            variant: 'h.1',
            dataTestId: 'typography',
          },
        }),
      ],
    ],
  }),
);

describe('Typography test', () => {
  test('Typography general', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
    });

    const { browser, context, page } = await openBrowserPage(pageUrl);

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
});
