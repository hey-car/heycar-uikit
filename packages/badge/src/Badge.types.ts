export interface BadgeProps {
  /**
   * Customize Badge text color
   */
  color?: 'primary' | 'neutral';
  /**
   * Number to show in badge
   */
  count?: number;
  /**
   * Set size of the badge
   */
  size?: number;
  /**
   * icon element to show
   */
  showIcon?: true;
  /**
   * set a symbol in badge
   */
  symbol?: string;
  /**
   * Customize Badge background color
   */
  background?: 'primary' | 'secondary' | 'tertiary' | 'highlight' | 'warning';
  /**
   * text of badge
   */
  text: string;
}
