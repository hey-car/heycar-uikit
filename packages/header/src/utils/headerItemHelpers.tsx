import React from 'react';

import {
  France,
  Germany,
  Language,
  Netherlands,
  Spain,
  UK,
} from '@heycar-uikit/icons';

import {
  headerClickTracking,
  LANG_OPTIONS,
} from '../constants/Header.constants';
import { HeaderProps, HeaderTrackingObj } from '../Header.types';

const itemOnClick = (
  track?: {
    fn: ((trackingObj: HeaderTrackingObj) => void) | undefined;
    obj: Partial<HeaderTrackingObj>;
  },
  onClick?: () => void,
) => {
  if (track && typeof track?.fn === 'function')
    track.fn({ ...headerClickTracking, ...track.obj } as HeaderTrackingObj);
  if (typeof onClick === 'function') onClick();
};

const getFlagIcon = (langCode: string) => {
  switch (langCode) {
    case 'de-DE':
      return <Germany />;
    case 'es-ES':
      return <Spain />;
    case 'fr-FR':
      return <France />;
    case 'en-GB':
      return <UK />;
    case 'nl-NL':
      return <Netherlands />;
    default:
      return <Language />;
  }
};

const getCurrentLang = (
  currentLangCode: string,
  langOptions = LANG_OPTIONS,
) => {
  const langObj = langOptions.find(lang => lang.langCode === currentLangCode);

  if (!langObj) return undefined;

  const Icon = getFlagIcon(currentLangCode);

  return {
    ...langObj,
    icon: Icon,
  };
};

const hasHeaderItems = (
  searchItemConfig: HeaderProps['searchItemConfig'],
  favoritesItemConfig: HeaderProps['favoritesItemConfig'],
  langItemConfig: HeaderProps['langItemConfig'],
  accountItemConfig: HeaderProps['accountItemConfig'],
  callItemConfig: HeaderProps['callItemConfig'],
) => ({
  hasSearch: !!searchItemConfig && !searchItemConfig.hide,
  hasFaves: !!favoritesItemConfig && !favoritesItemConfig.hide,
  hasLang: !!langItemConfig && !langItemConfig.hide,
  hasAccount: !!accountItemConfig && !accountItemConfig.hide,
  hasCall: !!callItemConfig && !callItemConfig.hide,
});

export { getCurrentLang, getFlagIcon, hasHeaderItems, itemOnClick };
