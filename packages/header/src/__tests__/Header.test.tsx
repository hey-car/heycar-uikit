/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';
import { DEFAULT_LOCALE } from '../Header.constants';

import { defaultData } from './Header.mock';

jest.mock('@heycar-uikit/themes', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
  useBreakpoint: jest.fn(() => ({
    breakpoints: {
      isTabletL: true,
      isDesktopS: true,
      isDesktopM: true,
      isDesktopL: true,
    },
  })),
}));

const dataTestId = 'test-id';

describe('ReviewRating', () => {
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
      const { getAllByLabelText } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(
        getAllByLabelText(defaultData.searchItemConfig!.label).length,
      ).toEqual(2);
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
   * Render tests
   */
  describe('Render tests', () => {
    it('should unmount without errors', () => {
      const { unmount } = render(
        <Header {...defaultData} dataTestId={dataTestId} />,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
