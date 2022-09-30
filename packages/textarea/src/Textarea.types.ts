import React, { ReactNode, TextareaHTMLAttributes } from 'react';

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'style' | 'value' | 'defaultValue' | 'onChange'
> & {
  /**
   * The value of the `input` element, required for a controlled component
   */
  value?: string;
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
   * Controlling the ability to resize a component
   */
  resize?: 'vertical' | 'none';
  /**
   * Additional `class` names to be added
   */
  className?: string;
  /**
   * Callback fired when the value is changed
   */
  onChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    payload: { value: string },
  ) => void;
  /**
   * The id for testing
   */
  dataTestId?: string;
};
