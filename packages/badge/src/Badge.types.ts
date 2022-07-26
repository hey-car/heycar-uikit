export interface BadgeProps {
  /**
   * Customize Badge text color
   */
  color?: 'primary' | 'secondary' | 'tertiary' | 'highlight' | 'warning';
  /**
   * The content of the Badge
   */
  children?: React.ReactNode;
  /**
   * text of badge
   */
  text?: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
