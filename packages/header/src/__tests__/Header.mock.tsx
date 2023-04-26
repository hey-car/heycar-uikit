/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { HeaderProps } from '../Header.types';

import { englishStyle } from './navigationItems.mock';

const defaultData: HeaderProps = {
  logoHref: 'heycar.com',
  trackingFn: (obj: Record<string, any>) => {
    console.log('CLICK', obj);
  },
  favoritesItemConfig: {
    label: 'Favorites',
    href: 'www.google.com',
    favoritesNumber: 8,
  },
  langItemConfig: {
    currentLang: 'en-GB',
  },
  accountItemConfig: {
    label: 'Login',
    onClick: () => alert('Runs given function'),
  },
  callItemConfig: {
    label: 'Call us',
    href: 'tel:00493030809241',
  },
  searchItemConfig: {
    Component: (
      <input
        aria-label="search-component"
        defaultValue="This is a separate component"
        style={{
          minWidth: '100%',
          height: '48px',
          padding: '0 16px',
          border: 'none',
          background: '#123D82',
          color: '#fff',
        }}
      />
    ),
    label: 'Search',
  },
  navigation: englishStyle,
  auxiliaryDetails: {
    tel: {
      value: '00493030809241',
    },
    email: {
      value: 'support@heycar.com',
    },
    // app: {
    //   appStoreUrl: 'https://apps.apple.com/uk/app/heycar/id1490142063',
    //   playStoreUrl:
    //     'https://play.google.com/store/apps/details?id=com.mobility_trader_gmbh.heycar&pli=1',
    // },
  },
};

export { defaultData };
