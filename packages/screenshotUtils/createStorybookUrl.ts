import { CreateStorybookUrlParams } from './createStorybookUrl.types';
import { storyBookUrl } from './setupScreenshotTesting';

export function createStorybookUrl({
  url = storyBookUrl,
  packageName,
  knobs = {},
}: CreateStorybookUrlParams) {
  const knobsQuery = Object.keys(knobs).reduce(
    (acc, knobName) => `${acc};${knobName}:${knobs[knobName]}`,
    '',
  );
  const componentPath = `-${packageName}--${packageName}`;

  return `${url}?id=components${componentPath}&args=${knobsQuery}`;
}
