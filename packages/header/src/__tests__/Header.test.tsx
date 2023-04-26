/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Header from '../Header';
import { DEFAULT_LOCALE } from '../Header.constants';
import { HeaderLinkProps, HeaderProps } from '../Header.types';

import { defaultData } from './Header.mock';

const dataTestId = 'test-id';

describe('Header', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('HEADER');
    });

    it('should set ARIA label for the logo', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(getByLabelText(DEFAULT_LOCALE.logoLabel)).toBeInTheDocument();
    });

    it('should set ARIA label for search', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(defaultData.searchItemConfig!.label),
      ).toBeInTheDocument();
    });

    it('should set ARIA label for favourites', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(defaultData.favoritesItemConfig!.label),
      ).toBeInTheDocument();
    });

    it('should set ARIA label for lang select', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(
          `${DEFAULT_LOCALE.langListHeading} - ${DEFAULT_LOCALE.spaceBarNotification}`,
        ),
      ).toBeInTheDocument();
    });

    it('should set ARIA label for account', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(defaultData.accountItemConfig!.label),
      ).toBeInTheDocument();
    });

    it('should set ARIA label for call', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(defaultData.callItemConfig!.label),
      ).toBeInTheDocument();
    });

    it('should set ARIA label for burger toggle', () => {
      const { getByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByLabelText(DEFAULT_LOCALE.burgerMenuButtonLabel),
      ).toBeInTheDocument();
    });

    it('should forward ref to Header', () => {
      const headerRef = jest.fn();
      const { getByTestId } = render(
        <Header {...defaultData} dataTestId={dataTestId} ref={headerRef} />,
      );

      expect(headerRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });
  });

  /**
   * Default states tests
   */
  describe('Default states tests', () => {
    it('should display number if favoritesNumber is > 0', () => {
      const updatedFavs: HeaderProps['favoritesItemConfig'] = {
        ...defaultData.favoritesItemConfig,
        label: 'faves',
        favoritesNumber: 8,
      };
      const { getByLabelText } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          favoritesItemConfig={updatedFavs}
        />,
      );

      expect(getByLabelText('Favorites count')).toHaveTextContent('8');
    });

    it('should display 99 if favoritesNumber is > 99', () => {
      const updatedFavs: HeaderProps['favoritesItemConfig'] = {
        ...defaultData.favoritesItemConfig,
        label: 'faves',
        favoritesNumber: 200,
      };
      const { getByLabelText } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          favoritesItemConfig={updatedFavs}
        />,
      );

      expect(getByLabelText('Favorites count')).toHaveTextContent('99');
    });

    it('should render correct flag if current lang is one of the default language iso codes', () => {
      const { getByTestId } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          langItemConfig={{
            currentLang: 'de-DE',
          }}
        />,
      );

      expect(getByTestId('GermanyIcon')).toBeInTheDocument();
    });
  });

  /**
   * Interaction tests
   */
  describe('Interaction tests', () => {
    it('calls passed onClick event when clicking account item in header', () => {
      const accountFn = jest.fn();
      const updatedAccount = {
        label: 'Login',
        onClick: accountFn,
      };
      const { getByLabelText } = render(
        <Header
          {...defaultData}
          accountItemConfig={updatedAccount}
          dataTestId={dataTestId}
        />,
      );

      fireEvent.click(getByLabelText(updatedAccount.label));

      expect(accountFn).toBeCalledTimes(1);
    });
  });

  /**
   * Render tests
   */
  describe('Render tests', () => {
    it('renders search component passed in search config', () => {
      const updatedSearch = {
        Component: (
          <input
            aria-label="search-component-render-test"
            defaultValue="Testing this component renders"
          />
        ),
        label: 'Search',
      };
      const { getByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          searchItemConfig={updatedSearch}
        />,
      );

      expect(
        getByRole('textbox', {
          name: 'search-component-render-test',
        }),
      ).toBeInTheDocument();
    });

    it('renders header, nav, and subnav links with custom link component if passed', () => {
      const customLink = (props: HeaderLinkProps) => (
        <a {...props} data-special-prop="true" />
      );
      const { getByRole, getAllByRole } = render(
        <Header
          {...defaultData}
          LinkComponent={customLink}
          dataTestId={dataTestId}
        />,
      );

      // header item
      expect(
        getByRole('link', {
          name: 'Favorites',
        }),
      ).toHaveAttribute('data-special-prop');

      // NOTE: these all render twice because of the desktop and mobile views
      // Nav item
      expect(
        getAllByRole('menuitem', {
          name: 'Used cars',
        })[0],
      ).toHaveAttribute('data-special-prop');

      // Open menu to get to subnav item
      fireEvent.click(
        getAllByRole('menuitem', {
          name: 'Car reviews - Press the Space key to show sub-menus.',
        })[0],
      );

      // subnav item
      expect(
        getAllByRole('menuitem', {
          name: 'Audi Q3 Sportback',
        })[0],
      ).toHaveAttribute('data-special-prop');
    });

    it('renders a link with a tel href for call config', () => {
      const { getByRole } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getByRole('link', {
          name: 'Call us',
        }),
      ).toHaveAttribute('href', defaultData?.callItemConfig?.href);
    });

    it('should unmount without errors', () => {
      const { unmount } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
