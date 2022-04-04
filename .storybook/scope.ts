import { ComponentType } from 'react';
import * as knobs from '@storybook/addon-knobs';
import * as dateUtils from 'date-fns';

import * as grid from './blocks/Grid';

const componentsContext = require.context(
  '../packages',
  true,
  /^\.\/(.*)\/src\/(index|desktop|mobile|responsive|circle|super-ellipse).ts$/,
);

const requireComponents = (context: __WebpackModuleApi.RequireContext) =>
  context.keys().reduce((acc: Record<string, ComponentType<unknown>>, key) => {
    Object.entries(context(key)).forEach(
      ([componentName, component]: [string, any]) => {
        if (['default', '__esModule'].includes(componentName)) return;

        acc[componentName] = component;
      },
    );

    return acc;
  }, {});

export default {
  ...requireComponents(componentsContext),
  ...grid,
  ...dateUtils,
  ...knobs,
};
