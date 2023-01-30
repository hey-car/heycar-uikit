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
   * onClick method callback upon dropdown click
   */
  onClick?: () => void;
  /**
   * onBlur method callback upon blur
   */
  onBlur?: () => void;
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
  /**
   * boolean for adding width.
   */
  fullWidth?: boolean;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
};
