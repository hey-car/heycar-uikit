/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { DEFAULT_LOCALE } from '../constants/Header.constants';
import Header from '../Header';
import { HeaderLinkProps, HeaderProps } from '../Header.types';

import { defaultData } from './Header.mock';

const dataTestId = 'test-id';

function setWidthDesktop() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1280,
  });
  global.dispatchEvent(new Event('resize'));
}

function setWidthMobile() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 240,
  });
  global.dispatchEvent(new Event('resize'));
}

describe('Header', () => {
  beforeEach(() => {
    setWidthDesktop();
  });

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

    it('should not render Lang picker if lang config not passed', () => {
      const { queryByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          langItemConfig={undefined}
        />,
      );

      expect(
        queryByRole('button', {
          name: 'Select Language - Press the Space key to show sub-menus.',
        }),
      ).not.toBeInTheDocument();
    });
  });

  /**
   * Interaction tests
   */
  describe('Interaction tests', () => {
    it('calls passed onClick event when clicking search item in header', () => {
      setWidthMobile();

      const searchFn = jest.fn();
      const searchConfig = {
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
        onClick: searchFn,
      };
      const { getByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          searchItemConfig={searchConfig}
        />,
      );

      fireEvent.click(getByRole('button', { name: 'Search' }));

      expect(searchFn).toBeCalledTimes(1);
    });

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
   * Tracking tests
   */
  describe('Tracking tests', () => {
    const trackingFn = jest.fn();

    const getMockTrackingPayload = (label = '') => ({
      action: 'Click',
      category: 'Header',
      label,
    });

    it('calls tracking function when clicking logo', () => {
      const { getByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          trackingFn={trackingFn}
        />,
      );

      fireEvent.click(getByRole('link', { name: 'heycar logo' }));

      expect(trackingFn).toBeCalledWith(getMockTrackingPayload('Logo'));
    });

    it('calls tracking function when clicking faves', () => {
      const { getByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          trackingFn={trackingFn}
        />,
      );

      fireEvent.click(
        getByRole('link', { name: defaultData.favoritesItemConfig?.label }),
      );

      expect(trackingFn).toBeCalledWith(
        getMockTrackingPayload(defaultData.favoritesItemConfig?.label),
      );
    });

    // it('calls tracking function when clicking account', () => {
    //   const { getByLabelText, getByRole } = render(
    //     <Header
    //       {...defaultData}
    //       dataTestId={dataTestId}
    //       trackingFn={trackingFn}
    //     />,
    //   );

    //   fireEvent.keyPress(
    //     getByRole('button', {
    //       name: 'Select Language - Press the Space key to show sub-menus.',
    //     }),
    //     { key: 'Space', code: 'Space' },
    //   );

    //   fireEvent.click(getByLabelText('Deutsch language select'));

    //   expect(trackingFn).toBeCalledWith(
    //     getMockTrackingPayload('Deutsch language select'),
    //   );
    // });

    it('calls tracking function when clicking account', () => {
      const { getByRole } = render(
        <Header
          {...defaultData}
          dataTestId={dataTestId}
          trackingFn={trackingFn}
        />,
      );

      fireEvent.click(
        getByRole('button', { name: defaultData.accountItemConfig?.label }),
      );

      expect(trackingFn).toBeCalledWith(
        getMockTrackingPayload(defaultData.accountItemConfig?.label),
      );
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

    it('renders custom locale values', () => {
      const customLocale = {
        closeSearchLabel: 'LT Close search',
        logoLabel: 'LT heycar logo',
        langListHeading: 'LT Select Language',
        burgerMenuButtonLabel: 'LT Navigation menu',
        favoritesCountLabel: 'LT Favorites count',
        showAllLabel: 'LT Show all',
        spaceBarNotification: 'LT Press the Space key to show sub-menus.',
        subMenuLabel: 'LT sub-menu',
        auxTelLabel: 'LT Call Us at',
        auxEmailLabel: 'LT Email Us at',
        auxAppHeading: 'LT Download our App now',
      };

      const { getAllByLabelText, getAllByText, getAllByRole, getByRole } =
        render(
          <Header
            {...defaultData}
            dataTestId={dataTestId}
            locale={customLocale}
          />,
        );

      const ddMenuNavBtn = getAllByRole('menuitem', {
        name: 'Car reviews - LT Press the Space key to show sub-menus.',
      })[1];

      expect(getByRole('link', { name: 'LT heycar logo' })).toBeInTheDocument();
      expect(ddMenuNavBtn).toBeInTheDocument();
      expect(
        getAllByLabelText('Car reviews LT sub-menu')[1],
      ).toBeInTheDocument();

      // Open menu to get to subnav item
      fireEvent.click(ddMenuNavBtn);

      expect(getAllByText('LT Show all')[1]).toBeInTheDocument();
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
