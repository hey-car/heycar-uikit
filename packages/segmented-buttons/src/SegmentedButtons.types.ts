import { HTMLAttributes } from 'react';

interface ButtonProps {
  /**
   * Label to be displayed on the button
   */
  label: string;
  /**
   * Value assigned to the button
   */
  value: string;
  /**
   * Icon to be displayed on the button, before the label
   */
  icon?: React.ReactNode;
  /**
   * Disable the button
   */
  isDisabled?: boolean;
  /**
   * ID for testing
   */
  dataTestId?: string;
}

interface ComponentProps {
  /**
   * An array of 2 or 3 buttons to display
   */
  buttons: ButtonProps[];
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * 	Function to run on selecting a button
   */
  onChange: (value: string) => void;
  /**
   * Current selected value
   */
  currentValue?: string;
  /**
   * render buttons with wide left anf right padding
   */
  wideView?: boolean;
}

type SegmentedButtonsProps = ComponentProps & HTMLAttributes<HTMLDivElement>;

export { ButtonProps, ComponentProps, SegmentedButtonsProps };
