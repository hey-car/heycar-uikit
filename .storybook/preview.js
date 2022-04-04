import { addons } from '@storybook/addons';
import { addParameters, configure } from '@storybook/react';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { LIVE_EXAMPLES_ADDON_ID } from 'storybook-addon-live-examples';

import scope from './scope';
import alfaTheme from './theme';


addons.setConfig({
  [LIVE_EXAMPLES_ADDON_ID]: {
    editorTheme: theme,
    sandboxPath: '/docs/sandbox',
    copyText: ['Copy', 'Copied'],
    expandText: ['Show code', 'Hide code'],
    shareText: ['Share', 'Share'],
    borderColor: 'var(--color-light-border-secondary)',
    borderRadius: 'var(--border-radius-s)',
    actionBg: 'var(--color-light-bg-primary)',
    actionColor: 'var(--color-light-text-primary)',
    actionAccent: 'var(--color-light-bg-accent)',
    errorsBg: 'var(--color-light-bg-negative-muted)',
    errorsColor: 'var(--color-light-text-accent)',
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
  // previewTabs: {
  //   'storybook/docs/panel': {
  //     hidden: true,
  //   },
  // },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Guidelines',
        ['How get started', 'vars', 'Changelog', 'FAQ'],
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
