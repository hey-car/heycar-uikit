export type LogoProps = {
  /**
   * The font-size of the svg logo
   */
  fontSize?: number;
  /**
   * @deprecated, use 'usage' instead. The color of the logo primary secondary and tertiary
   */
  color?: string;
  /**
   * Selects the correct logo color way based on the type of color it is used on
   */
  usage?: 'dark_bg' | 'light_bg' | 'mint_bg';
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
