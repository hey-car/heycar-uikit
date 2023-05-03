import { CreateStorybookUrlParams } from './createStorybookUrl.types';
import { storyBookUrl } from './setupScreenshotTesting';

export function createStorybookUrl({
  url = storyBookUrl,
  packageName,
  moduleName,
  knobs = {},
  componentCategory,
}: CreateStorybookUrlParams) {
  const Atoms = ['grid', 'icons', 'logo', 'typography'];

  const knobsQuery = Object.keys(knobs)
    .reduce((acc, knobName) => `${acc};${knobName}:${knobs[knobName]}`, '')
    .substring(1);

  const noHyphenName = packageName ? packageName.replace(/-/g, '') : '';
  const componentPath = `-${noHyphenName}--${moduleName || packageName}`;
  const component = componentPath.split('--').pop() || '';
  let category = componentCategory;

  if (!category)
    category = Atoms.includes(component.toLowerCase()) ? 'atoms' : 'molecules';

  return `${url}?id=components-${category}${componentPath}&args=${knobsQuery}`;
}
