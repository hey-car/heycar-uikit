import { ButtonProps } from '../SegmentedButtons.types';

const BTN_DATA: ButtonProps[] = [
  {
    label: 'Left',
    value: 'lft',
    isDisabled: false,
    icon: undefined,
  },
  {
    label: 'Middle',
    value: 'mid',
    isDisabled: false,
    icon: undefined,
  },
  {
    label: 'Right',
    value: 'rht',
    isDisabled: false,
    icon: undefined,
  },
];

const TWO_BTNS: ButtonProps[] = [
  {
    label: 'Left',
    value: 'lft',
    isDisabled: false,
    icon: undefined,
    dataTestId: 'btn-1',
  },
  {
    label: 'Right',
    value: 'rht',
    isDisabled: false,
    icon: undefined,
    dataTestId: 'btn-2',
  },
];

const modifyBtns = (isDisabled: boolean, icon: React.ReactNode | undefined) => {
  const output = [...BTN_DATA];

  output[0].isDisabled = isDisabled;
  output[1].isDisabled = isDisabled;
  output[2]!.isDisabled = isDisabled;

  output[0].icon = icon;
  output[1].icon = icon;
  output[2]!.icon = icon;

  return output;
};

export { BTN_DATA, TWO_BTNS, modifyBtns };
