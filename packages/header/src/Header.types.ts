import React from 'react';

import { DEFAULT_LOCALE } from './Header.constants';

export type Locale = typeof DEFAULT_LOCALE;

interface HeaderTrackingObj {
  action: 'Click';
  category: 'Header';
  label: string;
}

interface HeaderLinkProps {
  /**
   * Class name(s)
   */
  className: string;
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
   * Children of the link
   */
  children?: Element | JSX.Element | Array<Element | JSX.Element>;
}

interface HeaderItemConfig extends HeaderLinkProps {
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

interface SearchItemConfig
  extends Pick<HeaderItemConfig, 'onClick' | 'hide' | 'label'> {
  Component: React.ReactElement;
}

interface FavoritesItemConfig extends HeaderItemConfig {
  favoritesNumber?: number;
}

interface AccountItemConfig extends Omit<HeaderItemConfig, 'href'> {
  isLoggedIn?: number;
}

interface HeaderProps {
  /**
   * href for the logo anchor
   */
  logoHref: string;
  /**
   * Tracking function to be called with tracking object, onClick for any link or button within the Header
   */
  trackingFn?: (trackingObj: HeaderTrackingObj) => void;
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
   * Component to override <a /> used for links
   */
  LinkComponent: (props: HeaderLinkProps) => JSX.Element;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

export { HeaderTrackingObj, HeaderProps, LangOption };
