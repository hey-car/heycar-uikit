export interface ChipProps {
  /**
   * Customize Chip text color
   */
  variant?: 'filter' | 'choice';
  /**
   * The content of the Chip
   */
  children: React.ReactNode;
  /**
   * 	boolean to make chip disable.
   */
  disabled?: boolean;
  /**
   * selected style for choice chip
   */
  selected?: boolean;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
