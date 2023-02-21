import React, { KeyboardEventHandler, ReactNode } from 'react';

import { DropdownOptionProps } from './components/DropdownOption.types';

export type DropdownProps = {
  /**
   * list of options to show in dropdown
   */
  options: DropdownOptionProps[];
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
  onChange?: (value: DropdownOptionProps | undefined) => void;
  /**
   * for setting default value.
   */
  value?: DropdownOptionProps;
  /**
   * onKeyDown method callback upon key down
   */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
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
  /**
   * The string as a placeholder
   */
  placeholder?: string;
  /**
   * The hint for the error state
   */
  error?: ReactNode | boolean;
  /**
   * The short `hint` displayed under the dropdown
   */
  hint?: ReactNode;
  /**
   * The label of the dropdown component
   */
  label?: React.ReactNode;
  /**
   * The input ref of the dropdown component
   */
  inputRef?: React.Ref<HTMLInputElement>;
};
