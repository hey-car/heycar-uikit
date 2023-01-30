import {
  createStorybookUrl,
  screenshotMatchClick,
  screenshotMatchHover,
} from '../../../screenshotUtils';

const packageName = 'dropdown';
const dropdownSelector = '#root div';
const dropdownOptions = [
  {
    value: 'pomelo',
    label: 'Pomelo',
  },
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'mango',
    label: 'Mango',
  },
];
const dropdownValue = `{
  value: 'mango',
  label: 'Mango',
}`;
const isDisabled = true;
const clip = { x: 0, y: 0, width: 200, height: 100 };

describe('Dropdown tests', () => {
  test('Dropdown disabled event', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        options: dropdownOptions,
        value: dropdownValue,
        disabled: isDisabled,
      },
    });

    await screenshotMatchHover(pageUrl, dropdownSelector, { clip });
  });

  test('Dropdown default test', async () => {
    const pageUrl = createStorybookUrl({
      packageName,
      knobs: {
        options: dropdownOptions,
        value: dropdownValue,
      },
    });

    await screenshotMatchClick(pageUrl, dropdownSelector, { clip }, 'down');
  });
});
