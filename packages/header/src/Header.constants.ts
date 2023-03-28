import { LangOption } from './Header.types';

const DEFAULT_LOCALE = {
  logoLabel: 'heycar logo',
  langListHeading: 'Select Language',
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
    shortName: 'De',
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
    shortName: 'Fr',
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
    shortName: 'NL',
    href: '#nl-NL',
  },
];

export { DEFAULT_LOCALE, headerClickTracking, LANG_OPTIONS };
