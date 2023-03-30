import { CreateStorybookUrlParams } from './createStorybookUrl.types';
import { storyBookUrl } from './setupScreenshotTesting';

export function createStorybookUrl({
  url = storyBookUrl,
  packageName,
  moduleName,
  knobs = {},
}: CreateStorybookUrlParams) {
  const Atoms = ['grid', 'icons', 'logo', 'typography'];

  const knobsQuery = Object.keys(knobs)
    .reduce((acc, knobName) => `${acc};${knobName}:${knobs[knobName]}`, '')
    .substring(1);

  const componentPath = `-${packageName}--${moduleName || packageName}`;
  const component = componentPath.split('--').pop() || '';

  return `${url}?id=components-${
    Atoms.includes(component.toLowerCase()) ? 'atoms' : 'molecules'
  }${componentPath}&args=${knobsQuery}`;
}
