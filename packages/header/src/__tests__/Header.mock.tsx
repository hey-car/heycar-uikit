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
    favoritesNumber: 0,
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
      label: 'Electric cars',
      href: '#new-cars',
    },
    {
      label: 'Buy online',
      href: '#new-cars',
    },
    {
      label: 'Car reviews',
      subNavGroups: [
        {
          heading: 'Popular cars',
          items: [
            {
              label: 'Audi Q3 Sportback',
              href: '#Audi-Q3-Sportback',
            },
            {
              label: 'Audi A1',
              href: '#Audi-a1',
            },
            {
              label: 'BMW 3 Series',
              href: '#BMW-3-Series',
            },
            {
              label: 'BMW 2 Series',
              href: '#BMW-2-Series',
            },
            {
              label: 'BMW 5 Series',
              href: '#BMW-5-Series',
            },
            {
              label: 'BMW 7 Series',
              href: '#BMW-7-Series',
            },
            {
              label: 'BMW X5 Series',
              href: '#BMW-x5-Series',
            },
            {
              label: 'Audi Q3 Sportback',
              href: '#Audi-Q3-Sportback',
            },
            {
              label: 'Audi A1',
              href: '#Audi-a1',
            },
            {
              label: 'BMW 3 Series',
              href: '#BMW-3-Series',
            },
            {
              label: 'BMW 2 Series',
              href: '#BMW-2-Series',
            },
            {
              label: 'BMW 5 Series',
              href: '#BMW-5-Series',
            },
            {
              label: 'BMW 7 Series',
              href: '#BMW-7-Series',
            },
            {
              label: 'BMW X5 Series',
              href: '#BMW-x5-Series',
            },
            {
              label: 'BMW 2 Series',
              href: '#BMW-2-Series',
            },
            {
              label: 'BMW 5 Series',
              href: '#BMW-5-Series',
            },
            {
              label: 'BMW 7 Series',
              href: '#BMW-7-Series',
            },
            {
              label: 'BMW X5 Series',
              href: '#BMW-x5-Series',
            },
          ],
          showAllLink: {
            href: '#reviews',
          },
        },
      ],
    },
    {
      label: 'Cars by Location',
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
            {
              label: 'London 7',
              href: '#London',
            },
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
            {
              label: 'London 7',
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
      label: 'Value my Car',
      href: '#Online-Bestellung',
    },
    {
      label: 'Finance',
      href: '#Coches-de-segunda-mano',
    },
    {
      label: 'Insurance',
      href: '#Insurance',
      subNavGroups: [
        {
          heading: 'Insurance',
          items: [
            {
              label: 'Learn about insurance',
              href: '#London',
            },
            {
              label: 'Learn about insurance',
              href: '#London',
            },
            {
              label: 'Learn about insurance',
              href: '#London',
            },
          ],
        },
      ],
    },
    {
      label: 'Deals',
      href: '#Deals',
    },
    {
      label: 'News & Guides',
      subNavGroups: [
        {
          heading: 'Recently viewed',
          items: [
            {
              label: 'Fastest cars in the world 2023',
              href: '#London',
            },
          ],
        },
        {
          heading: 'Latest news',
          items: [
            {
              label: 'New 2024 Volkswagen ID.7: price, specs and release date',
              href: '#London',
            },
            {
              label: 'New 2024 Volkswagen ID.7: price, specs and release date',
              href: '#London',
            },
            {
              label: 'New 2024 Volkswagen ID.7: price, specs and release date',
              href: '#London',
            },
            {
              label: 'New 2024 Volkswagen ID.7: price, specs and release date',
              href: '#London',
            },
            {
              label: 'New 2024 Volkswagen ID.7: price, specs and release date',
              href: '#London',
            },
          ],
          showAllLink: {
            href: '#locations',
          },
        },
        {
          heading: 'Trending Guides',
          items: [
            {
              label: 'New 2023 Car Tax rates and VED bands',
              href: '#London',
            },
            {
              label: 'New 2023 Car Tax rates and VED bands',
              href: '#London',
            },
            {
              label: 'New 2023 Car Tax rates and VED bands',
              href: '#London',
            },
            {
              label: 'New 2023 Car Tax rates and VED bands',
              href: '#London',
            },
            {
              label: 'New 2023 Car Tax rates and VED bands',
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
