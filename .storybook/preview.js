import { addons } from '@storybook/addons';
import { addParameters, configure } from '@storybook/react';
import { LIVE_EXAMPLES_ADDON_ID } from 'storybook-addon-live-examples';
import { DocsContainer } from '@storybook/addon-docs';

import scope from './scope';
import alfaTheme from './theme';
import { editorTheme } from './editorTheme';
import { ComponentHeader, TabContainer } from './blocks';

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
    container: ({ children, context }) => {
      console.log({context, children})
      return (
        <DocsContainer context={context}>
          <ComponentHeader
            name={context.name}
            version={context.parameters.version}
            stage={context.parameters.stage}
            design={context.parameters.design}
          />
          {children}
          <TabContainer tabs={context.parameters.tabs} />
        </DocsContainer>
      );},
  },
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
