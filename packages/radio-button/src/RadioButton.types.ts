import { InputHTMLAttributes } from 'react';

interface ComponentProps {
  /**
   * Set the input as checked
   */
  checked: boolean;
  /**
   * Add class names to the component
   */
  className?: string;
  /**
   * Set the input as disabled
   */
  disabled?: boolean;
  /**
   * Set the input to it's error state
   */
  error?: boolean;
  /**
   * A function to be called onChange
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

type RadioButtonProps = ComponentProps & InputHTMLAttributes<HTMLInputElement>;

export { ComponentProps, RadioButtonProps };
