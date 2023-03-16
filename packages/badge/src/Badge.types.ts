export interface BadgeProps {
  /**
   * Customize Badge text color
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * The content of the Badge
   */
  children: React.ReactNode;
  /**
   * 	Element before the children.
   */
  leftIcon?: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
