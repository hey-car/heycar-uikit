import React from 'react';

import { NavItem } from './components/Navigation.types';
import { DEFAULT_LOCALE } from './constants/Header.constants';

type Locale = typeof DEFAULT_LOCALE;

// HEADER ITEM RELATED TYPES

interface HeaderTrackingObj {
  action: 'Click';
  category: 'Header';
  label: string;
}

interface HeaderLinkProps {
  /**
   * Class name(s)
   */
  className?: string;
  /**
   * Href for navigation on click
   */
  href?: string;
  /**
   * Function to run on click
   */
  onClick?: () => void;
  /**
   * Function to run on hover
   */
  onHover?: () => void;
  /**
   * HTML role attribute
   */
  role?: string;
  /**
   * Tab index
   */
  tabIndex?: number;
  /**
   * Children of the link
   */
  children?:
    | string
    | Element
    | JSX.Element
    | Array<string | Element | JSX.Element | undefined>;
}

interface HeaderItemConfig extends HeaderLinkProps {
  /**
   * Text label for the button or link
   */
  label: string;
  /**
   * Hide this item from the Header
   */
  hide?: boolean;
}

interface LangOption {
  /**
   * Current language as an ISO code e.g. 'en-GB'
   */
  langCode: string;
  /**
   * label to be displayed in menu
   */
  label: string;
  /**
   * 2 or 3 letter abbreviation of the name, to be show in header
   */
  shortName: string;
  /**
   * Href to navigate to on click
   */
  href: string;
  /**
   * Function to run on click
   */
  onClick?: () => void;
}

interface LangItemConfig {
  /**
   * Current language as an ISO code e.g. 'en-GB'
   */
  currentLang: string;
  /**
   * optional custom list of languages
   */
  options?: LangOption[];
  /**
   * Hide this item from the Header
   */
  hide?: boolean;
}

interface SearchItemConfig extends Pick<HeaderItemConfig, 'hide' | 'label'> {
  Component: React.ReactElement;
  /**
   * Function to run on click
   */
  onClick?: (isOpen: boolean) => void;
}

interface FavoritesItemConfig extends HeaderItemConfig {
  favoritesNumber?: number;
}

interface AccountItemConfig extends Omit<HeaderItemConfig, 'href'> {
  isLoggedIn?: number;
}

interface FavoritesItemConfig extends HeaderItemConfig {
  favoritesNumber?: number;
}

interface ContactDetail {
  /**
   * Text label to be displayed before the number or email. Overrides default values in locale
   */
  label?: string;
  /**
   * Phone number or email address
   */
  value: string;
}

// HEADER COMPONENT PROPS

interface HeaderProps {
  /**
   * Component to override <a /> used for links
   */
  LinkComponent?: (props: HeaderLinkProps) => JSX.Element;
  /**
   * href for the logo anchor
   */
  logoHref: string;
  /**
   * Tracking function to be called with tracking object, onClick for any link or button within the Header
   */
  trackingFn?: (trackingObj: HeaderTrackingObj) => void;
  /**
   * The current route of the parent app, minus the domain etc.
   * This is used to calculate if any nav item matches the current page
   */
  currentRoute?: string;
  /**
   * `locale` - Object with localized strings
   */
  locale?: Locale;
  /**
   * Config for Header search item
   */
  searchItemConfig?: SearchItemConfig;
  /**
   * Config for Header favorites item
   */
  favoritesItemConfig?: FavoritesItemConfig;
  /**
   * Config for Header language picker
   */
  langItemConfig?: LangItemConfig;
  /**
   * Config for Header account item
   */
  accountItemConfig?: AccountItemConfig;
  /**
   * Config for Header call item
   */
  callItemConfig?: HeaderItemConfig;
  /**
   * Supplementary information to be show in the burger menu
   */
  auxiliaryDetails?: {
    tel?: ContactDetail;
    email?: ContactDetail;
    app?: {
      /**
       * Heading to be displayed over app store buttons. Overrides default value in locale
       */
      heading?: string;
      /**
       * Apple app store URL
       */
      appStoreUrl?: string;
      /**
       * Google play store URL
       */
      playStoreUrl?: string;
    };
  };
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * Data representing the nav and sub nav
   */
  navigation: NavItem[];
}

export { HeaderLinkProps, HeaderTrackingObj, HeaderProps, LangOption, Locale };
