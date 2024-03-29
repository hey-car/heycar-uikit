import {
  HeaderLinkProps,
  HeaderProps,
  HeaderTrackingObj,
  Locale,
} from '../Header.types';

type ItemOnClick = (
  track?: {
    fn: ((trackingObj: HeaderTrackingObj) => void) | undefined;
    obj: Partial<HeaderTrackingObj>;
  },
  onClick?: () => void,
  closeMenu?: boolean,
) => void;

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
   * Function to run on click
   */
  onClick?: () => void;
  /**
   * SubNavGroup array
   */
  subNavGroups?: SubNavGroup[];
  /**
   * Only show this item in the burger menu, Not on the dropdown version of the menu
   */
  isBurgerMenuOnly?: boolean;
}

interface NavigationProps
  extends Pick<
    HeaderProps,
    'accountItemConfig' | 'currentRoute' | 'langItemConfig'
  > {
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
  /**
   * Helper function to be called on item click
   */
  itemOnClick: ItemOnClick;
}

interface SubNavProps {
  /**
   * Is in Dropdown Menu display mode. from tablet-L breakpoint and up
   */
  isDropDownMenu: boolean;
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
  /**
   * Helper function to be called on item click
   */
  itemOnClick: ItemOnClick;
}

export { ItemOnClick, NavigationProps, NavItem, SubNavGroup, SubNavProps };
