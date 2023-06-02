import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'app-store-button';

const langs = ['de-DE', 'en-EN', 'es-ES', 'fr-FR'];

const clip = { x: 0, y: 0, width: 200, height: 80 };

const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'AppStoreButton variants store=apple theme=default',
  screenshotTesting({
    cases: langs.map(lang => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          lang,
          store: 'apple',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'AppStoreButton variants store=apple theme=alt',
  screenshotTesting({
    cases: langs.map(lang => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          lang,
          store: 'apple',
          theme: 'alt',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);

describe(
  'AppStoreButton variants store=google theme=default',
  screenshotTesting({
    cases: langs.map(lang => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          lang,
          store: 'google',
        },
      }),
    ]),
    screenshotOpts: { clip },
  }),
);
