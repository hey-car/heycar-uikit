import {
  createStorybookUrl,
  setupScreenshotTesting,
} from '../../../screenshotUtils';

const packageName = 'breadcrumbs';
const clip = { x: 0, y: 0, width: 600, height: 100 };

const breadcrumbs = [
  [
    {
      link: '#breadcrumbs',
      title: 'Breadcrumb Default',
    },
    {
      link: '#breadcrumb',
      title: 'Breadcrumb Default',
    },
    {
      link: '#breadcrumb',
      title: 'Breadcrumb Current',
    },
  ],
  [
    {
      link: '#breadcrumbs',
      title: 'Breadcrumb Default',
    },
    {
      title: 'Breadcrumb Default without link',
    },
    {
      link: '#breadcrumb',
      title: 'Breadcrumb Current',
    },
  ],
];

const screenshotTesting = setupScreenshotTesting({
  it,
  beforeAll,
  afterAll,
  expect,
});

describe(
  'Breadcrumbs screenshot tests',
  screenshotTesting({
    cases: breadcrumbs.map(breadcrumb => [
      'sprite',
      createStorybookUrl({
        packageName,
        knobs: {
          breadcrumbs: breadcrumb,
        },
      }),
    ]),
    screenshotOpts: {
      clip,
      animations: 'disabled',
    },
  }),
);
