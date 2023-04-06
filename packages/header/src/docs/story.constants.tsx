/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { HeaderProps } from '../Header.types';

const defaultData: HeaderProps = {
  logoHref: 'heycar.com',
  trackingFn: (obj: Record<string, any>) => {
    console.log('CLICK', obj);
  },
  favoritesItemConfig: {
    label: 'Favorites',
    href: 'www.google.com',
  },
  langItemConfig: {
    currentLang: 'en-GB',
  },
  accountItemConfig: {
    label: 'Login',
    onClick: () => {
      alert('Login modal');
    },
  },
  callItemConfig: {
    label: 'Call us',
    href: 'tel:00493030809241',
  },
  searchItemConfig: {
    Component: (
      <input
        style={{
          minWidth: '424px',
          height: '48px',
          padding: '0 16px',
          border: 'none',
          background: '#123D82',
          color: '#fff',
        }}
        value="This is a seperate component"
      />
    ),
    label: 'Search',
  },
  navigation: [
    {
      label: 'Used cars',
      href: '#used-cars',
    },
    {
      label: 'New cars',
      href: '#new-cars',
    },
    {
      label: 'Car reviews',
      subNavGroups: [
        {
          heading: "Toutes les voitures d'occasion",
          items: [
            {
              label: 'Audi Q3 Sportback',
              href: '#Audi-Q3-Sportback',
            },
            {
              label: 'BMW 3 Series',
              href: '#BMW-3-Series',
            },
          ],
        },
      ],
    },
    {
      label: 'Locations',
      subNavGroups: [
        {
          heading: 'Recent Locations',
          items: [
            {
              label: 'London',
              href: '#London',
            },
            {
              label: 'London 2',
              href: '#London',
            },
            {
              label: 'London 3',
              href: '#London',
            },
          ],
        },
        {
          heading: 'Popular Locations',
          items: [
            {
              label: 'London',
              href: '#London',
            },
            {
              label: 'London 2',
              href: '#London',
            },
            {
              label: 'London 3',
              href: '#London',
            },
            {
              label: 'London 4',
              href: '#London',
            },
            {
              label: 'London 5',
              href: '#London',
            },
            {
              label: 'London 6',
              href: '#London',
            },
          ],
          showAllLink: {
            href: '#locations',
          },
        },
      ],
    },
    {
      label: 'Online Bestellung',
      href: '#Online-Bestellung',
    },
    {
      label: 'Coches de segunda mano',
      href: '#Coches-de-segunda-mano',
    },
    {
      label: 'News & Guides',
      subNavGroups: [
        {
          heading: 'Recent News',
          items: [
            {
              label: 'London',
              href: '#London',
            },
            {
              label: 'London 2',
              href: '#London',
            },
            {
              label: 'London 3',
              href: '#London',
            },
          ],
        },
        {
          heading: 'Deals und Specials',
          items: [
            {
              label: 'London',
              href: '#London',
            },
            {
              label: 'London 2',
              href: '#London',
            },
            {
              label: 'London 3',
              href: '#London',
            },
            {
              label: 'London 4',
              href: '#London',
            },
            {
              label: 'London 5',
              href: '#London',
            },
            {
              label: 'London 6',
              href: '#London',
            },
          ],
          showAllLink: {
            href: '#locations',
          },
        },
        {
          heading: 'Guides',
          items: [
            {
              label: 'Hasta 1.200€ de bonificación',
              href: '#London',
            },
            {
              label: 'Fahrzeuge zum online finanzieren',
              href: '#London',
            },
            {
              label: 'Alles über Elektrofahrzeuge',
              href: '#London',
            },
            {
              label: 'London 4',
              href: '#London',
            },
            {
              label: 'London 5',
              href: '#London',
            },
            {
              label: 'London 6',
              href: '#London',
            },
          ],
          showAllLink: {
            href: '#locations',
          },
        },
      ],
    },
    {
      label: 'Blog',
      subNavGroups: [
        {
          heading: 'Recently Viewed',
          items: [
            {
              label: 'London',
              href: '#London',
            },
            {
              label: 'London 2',
              href: '#London',
            },
            {
              label: 'London 3',
              href: '#London',
            },
          ],
        },
        {
          heading: 'Articles',
          items: [
            {
              label: 'London',
              desc: 'Everything you need to know about the UKs electric',
              href: '#London',
            },
            {
              label: 'London 2',
              desc: 'Everything you need to know',
              href: '#London',
            },
            {
              label: 'London 3',
              desc: 'Everything you need to know about the UKs electric car market',
              href: '#London',
            },
            {
              label: 'London 4',
              desc: "Que faut-il regarder avant d'acheter une voiture d'occasion ?",
              href: '#London',
            },
            {
              label: 'London 5',
              desc: 'Everything you need to know',
              href: '#London',
            },
            {
              label: 'London 6',
              desc: 'Everything you need to know about the UKs electric car market',
              href: '#London',
            },
          ],
          showAllLink: {
            href: '#locations',
          },
        },
      ],
    },
  ],
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
