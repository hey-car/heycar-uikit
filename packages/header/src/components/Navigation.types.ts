import {
  HeaderLinkProps,
  HeaderProps,
  HeaderTrackingObj,
  Locale,
} from '../Header.types';

interface SubNavItem {
  /**
   * Description text to be displayed under the label
   */
  desc?: string;
  /**
   * Href for navigation on click
   */
  href: string;
  /**
   * Text label for the link
   */
  label: string;
}

interface SubNavGroup {
  /**
   * Heading for the group
   */
  heading: string;
  /**
   * SubNavItem array
   */
  items: SubNavItem[];
  /**
   * Text label for the link
   */
  showAllLink?: {
    /**
     * Href for navigation on click
     */
    href?: string;
    /**
     * Function to run on click
     */
    onClick?: () => void;
    /**
     * Text label to override the default value in locale
     */
    label?: string;
    /**
     * Hide this item
     */
    hide?: boolean;
  };
}

interface NavItem {
  /**
   * Text label to be displayed
   */
  label: string;
  /**
   * Href for navigation on click (only use if item has no sub nav groups)
   */
  href?: string;
  /**
   * SubNavGroup array
   */
  subNavGroups?: SubNavGroup[];
}

interface NavigationProps {
  /**
   * Id of the current open nav item
   */
  activeNavItem?: string;
  /**
   * Supplementary information to be show in the burger menu
   */
  auxiliaryDetails?: HeaderProps['auxiliaryDetails'];
  /**
   * Current language as an ISO code e.g. 'en-GB'
   */
  currentLang?: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * Component to use for links. May be a default React <a /> or a custom component from the parent application
   */
  Link: (props: HeaderLinkProps) => JSX.Element;
  /**
   * `locale` - Object with localized strings
   */
  locale?: Locale;
  /**
   * Data representing the nav and sub nav
   */
  navigation: NavItem[];
  /**
   * Fn to set the active nav item
   */
  setActiveNavItem: (id: string | undefined) => void;
  /**
   * Tracking function to be called with tracking object, onClick for any link or button within the Header
   */
  trackingFn?: (trackingObj: HeaderTrackingObj) => void;
}

interface SubNavProps {
  /**
   * Is the subnav currently open
   */
  isOpen: boolean;
  /**
   * Component to use for links. May be a default React <a /> or a custom component from the parent application
   */
  Link: (props: HeaderLinkProps) => JSX.Element;
  /**
   * `locale` - Object with localized strings
   */
  locale?: Locale;
  /**
   * The id of the parent nav item
   */
  navItemId?: string;
  /**
   * The label of the parent nav item
   */
  navItemName?: string;
  /**
   * Data representing the sub nav
   */
  subNavGroups: SubNavGroup[];
  /**
   * Tracking function to be called with tracking object, onClick for any link or button within the Header
   */
  trackingFn?: (trackingObj: HeaderTrackingObj) => void;
}

export { NavigationProps, NavItem, SubNavProps };
