import { create } from '@storybook/theming';

import { version } from '../package.json';

export default create({
  base: 'light',
  colorPrimary: 'var(--color-mica-blue-500)',
  colorSecondary: '#052962',
  appContentBg: '#fff',
  appBorderColor: 'rgba(11, 31, 53, 0.1)',
  fontBase: 'Objektiv, sans-serif, "Helvetica Neue", Helvetica, Arial;',
  fontCode: 'Monaco, Menlo, monospace',
  textColor: '#303030',
  barTextColor: '#6D7986',
  barSelectedColor: '#00846A',
  inputBg: '#fff',
  inputBorder: '#DBDEE1',
  inputTextColor: '#0B1F35',
  brandTitle: `core-components@${version}`,
  brandImage: './images/logo.svg',
});
