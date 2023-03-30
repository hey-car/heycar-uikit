import { LangOption } from './Header.types';

const DEFAULT_LOCALE = {
  logoLabel: 'heycar logo',
  langListHeading: 'Select Language',
  burgerMenuButtonLabel: 'Navigation menu',
  spaceBarNotification: 'Press the Space key to show sub-menus.',
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

export { DEFAULT_LOCALE, headerClickTracking, LANG_OPTIONS };
