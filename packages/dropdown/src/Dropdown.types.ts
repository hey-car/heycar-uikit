import React from 'react';

export type SelectOptions = {
  /**
   * labels of options
   */
  label: string;
  /**
   * value of options
   */
  value: string;
  /**
   * Element placed before the children.
   */
  leftContent?: React.ReactNode;
  /**
   * Element placed after the children
   */
  rightContent?: React.ReactNode;
};

export type DropdownProps = {
  /**
   * list of options to show in dropdown
   */
  options: SelectOptions[];
  /**
   * onChange method callback upon option change
   */
  onChange?: (value: SelectOptions | undefined) => void;
  /**
   * for setting default value.
   */
  value?: SelectOptions;
  /**
   * boolean prop to set disabled state.
   */
  disabled?: boolean;
  /**
   * id for testing purposes.
   */
  dataTestId?: string;
};
