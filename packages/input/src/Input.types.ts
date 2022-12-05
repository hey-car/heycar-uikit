import React, {
  ChangeEventHandler,
  FormEventHandler,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'onClick' | 'onMouseDown'
> & {
  /**
   * The value of the `input` element, required for a controlled component
   */
  value?: string;
  /**
   * Type of the `input` element. It should be a valid HTML5 input type.
   */
  type?: 'number' | 'email' | 'password' | 'tel' | 'text';
  /**
   * 	The default value. Use when the component is not controlled
   */
  defaultValue?: string;
  /**
   * If `true`, the `input` will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The hint for the error state
   */
  error?: ReactNode | boolean;
  /**
   * The short `hint` displayed under the input
   */
  hint?: ReactNode;
  /**
   * The label of the input component
   */
  label?: React.ReactNode;
  /**
   * The icon placed before of the input component
   */
  leftIcon?: React.ReactNode;
  /**
   * The addon placed after of the input component
   */
  rightAddons?: React.ReactNode;
  /**
   * The icon placed after of the input component
   */
  rightIcon?: React.ReactNode;
  /**
   * Additional `class` names to be added
   */
  className?: string;
  /**
   * Callback fired when the value is changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  /**
   *  Callback fired when the value is input
   */
  onInput?: FormEventHandler<HTMLInputElement> | undefined;
  /**
   * Callback fired when the value is clicked
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Callback fired when the value is mouse down
   */
  onMouseDown?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * Callback fired when the value is mouse up
   */
  onMouseUp?: (event: MouseEvent<HTMLDivElement>) => void;
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * pattern attribute for regular expression
   */
  pattern?: string | RegExp;
};
