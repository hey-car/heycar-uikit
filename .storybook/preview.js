import { addons } from '@storybook/addons';
import { addParameters, configure } from '@storybook/react';
import { LIVE_EXAMPLES_ADDON_ID } from 'storybook-addon-live-examples';

import scope from './scope';
import alfaTheme from './theme';
import { editorTheme } from './editorTheme';

addons.setConfig({
  [LIVE_EXAMPLES_ADDON_ID]: {
    editorTheme,
    sandboxPath: '/docs/sandbox',
    copyText: ['Copy', 'Copied'],
    expandText: ['Show code', 'Hide code'],
    shareText: ['Share', 'Share'],
    borderColor: 'none',
    borderRadius: '5px',
    actionBg: 'var(--color-mica-blue-400)',
    actionColor: 'white',
    actionAccent: 'var(--color-light-bg-accent)',
    errorsBg: 'var(--color-red-400)',
    errorsColor: 'var(--color-red-700)',
    fontBase: 'var(--font-family-system)',
    fontCode: 'Monaco, Menlo, monospace',
    fontSizeBase: 16,
    fontSizeCode: 14,
    defaultCanvas: true,
    scope: {
      ...scope,
    },
  },
});

addParameters({
  viewMode: 'docs',
  docs: {
    theme: alfaTheme,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Introduction',
        'Guidelines',
        ['Installation', 'Contributing', 'Package structure convention', 'Code style guide convention'],
        'Components',
      ],
    },
  },
});

configure(
  [
    require.context('../docs', true, /\.stories\.mdx$/),
    require.context('../packages', true, /\.stories\.(tsx|mdx)$/),
  ],
  module,
);
