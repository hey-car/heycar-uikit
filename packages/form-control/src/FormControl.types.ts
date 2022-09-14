import { HTMLAttributes, ReactNode } from 'react';

export type FormControlProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * The content of the form control
   */
  children?: ReactNode;
  /**
   * If `true`, the component will take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * 	If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is displayed in filled state
   */
  filled?: boolean;
  /**
   * If `true`, the component is displayed in focused state
   */
  focused?: boolean;
  /**
   * 	If `true`, the label is displayed in an error state or error message
   */
  error?: ReactNode | boolean;
  /**
   * 	The short hint displayed in the input before the user enters a value
   */
  hint?: ReactNode;
  /**
   * A text or an element to be used in an enclosing label element
   */
  label?: ReactNode;
  /**
   * Element placed after the children
   */
  leftIcon?: ReactNode;
  /**
   * Element after the children
   */
  rightAddons?: ReactNode;
  /**
   * Icon after the children
   */
  rightIcon?: ReactNode;
  /**
   * Element under the children
   */
  bottomAddons?: ReactNode;
  /**
   * Additional `class` names to be added
   */
  className?: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
};
