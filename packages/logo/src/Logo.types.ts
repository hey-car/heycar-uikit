export type LogoProps = {
  /**
   * The font-size of the svg logo
   */
  fontSize?: number;
  /**
   * The color of the logo primary secondary and tertiary
   */
  color?: string;
  /**
   * if true hide non-interactive content from the accessibility API
   */
  ariaHidden?: boolean;
  /**
   * Set title for accessibility/SEO
   */
  title?: string;
  /**
   *   set aria-label attribute
   */
  ariaLabel?: string;
  /**
   *   set role attribute for users of assistive technologies
   */
  role?: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
};
