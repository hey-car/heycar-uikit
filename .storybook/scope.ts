import { ComponentType } from 'react';
import * as knobs from '@storybook/addon-knobs';
import * as dateUtils from 'date-fns';

import * as grid from './blocks/Grid';
import * as AllIcons from '../packages/icons/src';
import * as headerMocks from '../packages/header/src/__tests__/Header.mock';

const componentsContext = require.context(
  '../packages',
  true,
  /^\.\/(.*)\/src\/(index|desktop|mobile|responsive|circle|super-ellipse).ts$/,
);

const requireComponents = (context: __WebpackModuleApi.RequireContext) => {
  return context
    .keys()
    .reduce((acc: Record<string, ComponentType<unknown>>, key) => {
      Object.entries(context(key)).forEach(([, component]: [string, any]) => {
        const { displayName } = component;

        if (['default', '__esModule'].includes(displayName)) return;

        acc[displayName] = component;
      });

      return acc;
    }, {});
};

export default {
  ...requireComponents(componentsContext),
  ...grid,
  ...dateUtils,
  ...knobs,
  ...AllIcons,
  ...headerMocks,
};
