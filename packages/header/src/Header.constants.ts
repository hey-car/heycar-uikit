import { LangOption } from './Header.types';

const DEFAULT_LOCALE = {
  closeSearchLabel: 'Close search',
  logoLabel: 'heycar logo',
  langListHeading: 'Select Language',
  burgerMenuButtonLabel: 'Navigation menu',
  showAllLabel: 'Show all',
  spaceBarNotification: 'Press the Space key to show sub-menus.',
  subMenuLabel: 'sub-menu',
  auxTelLabel: 'Call Us at',
  auxEmailLabel: 'Email Us at',
  auxAppHeading: 'Download our App now',
};

const headerClickTracking = {
  action: 'Click',
  category: 'Header',
  label: undefined,
};

const LANG_OPTIONS: LangOption[] = [
  {
    langCode: 'de-DE',
    label: 'Deutsch',
    shortName: 'Deu',
    href: '#de-DE',
  },
  {
    langCode: 'en-GB',
    label: 'English',
    shortName: 'Eng',
    href: '#en-GB',
  },
  {
    langCode: 'fr-FR',
    label: 'Français',
    shortName: 'Fra',
    href: '#fr-FR',
  },
  {
    langCode: 'es-ES',
    label: 'Español',
    shortName: 'Esp',
    href: '#es-ES',
  },
  {
    langCode: 'nl-NL',
    label: 'Nederlands',
    shortName: 'Nld',
    href: '#nl-NL',
  },
];

const SUBNAV_CONFIG = {
  quarter: {
    className: 'quarterWidth',
    colWidth: 3,
    maxItem: 5,
    maxCaptionItem: 3,
  },
  third: {
    className: 'thirdWidth',
    colWidth: 4,
    maxItem: 5,
    maxCaptionItem: 3,
  },
  half: {
    className: 'halfWidth',
    colWidth: 6,
    maxItem: 10,
    maxCaptionItem: 6,
  },
  full: {
    className: 'fullWidth',
    colWidth: 12,
    maxItem: 15,
    maxCaptionItem: 9,
  },
};

const BURGER_MENU_SUBNAV_MAX_ITEMS = 5;

export {
  BURGER_MENU_SUBNAV_MAX_ITEMS,
  DEFAULT_LOCALE,
  headerClickTracking,
  LANG_OPTIONS,
  SUBNAV_CONFIG,
};
