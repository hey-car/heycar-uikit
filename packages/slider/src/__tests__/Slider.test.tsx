/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Slider from '../Slider';
import { DEFAULT_LOCALE } from '../Slider.constants';

const dataTestId = 'test-id';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('Slider', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Slider dataTestId={dataTestId} stepCount={10} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set default ARIA label for the thumbs', () => {
      const { getByRole } = render(
        <Slider dataTestId={dataTestId} stepCount={10} />,
      );

      expect(
        getByRole('slider', { name: DEFAULT_LOCALE.thumb1 }),
      ).toBeInTheDocument();
      expect(
        getByRole('slider', { name: DEFAULT_LOCALE.thumb2 }),
      ).toBeInTheDocument();
    });

    it('should set custom ARIA label for the thumbs', () => {
      const locale = {
        thumb1: 'Test thumb 1',
        thumb2: 'Test thumb 2',
      };
      const { getByRole } = render(
        <Slider dataTestId={dataTestId} locale={locale} stepCount={10} />,
      );

      expect(getByRole('slider', { name: locale.thumb1 })).toBeInTheDocument();
      expect(getByRole('slider', { name: locale.thumb2 })).toBeInTheDocument();
    });

    it('should forward ref to Slider', () => {
      const sliderRef = jest.fn();
      const { getByTestId } = render(
        <Slider dataTestId={dataTestId} ref={sliderRef} stepCount={10} />,
      );

      expect(sliderRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });
  });

  /**
   * Default states tests
   */
  describe('Default states tests', () => {
    it('sets initial values for both thumbs', () => {
      const { getByRole } = render(
        <Slider
          dataTestId={dataTestId}
          selectedRangeIndexes={[4, 5]}
          stepCount={10}
        />,
      );

      expect(
        getByRole('slider', { name: DEFAULT_LOCALE.thumb1 }),
      ).toHaveAttribute('aria-valuenow', '4');
      expect(
        getByRole('slider', { name: DEFAULT_LOCALE.thumb2 }),
      ).toHaveAttribute('aria-valuenow', '5');
    });
  });

  /**
   * Interaction tests
   */
  describe('Interaction tests', () => {
    it('calls on change for every change', async () => {
      const change = jest.fn();
      const { getByRole } = render(
        <Slider
          dataTestId={dataTestId}
          onChange={change}
          selectedRangeIndexes={[0, 9]}
          stepCount={10}
        />,
      );

      const leftThumb = getByRole('slider', { name: DEFAULT_LOCALE.thumb1 });
      const rightThumb = getByRole('slider', { name: DEFAULT_LOCALE.thumb2 });

      leftThumb.focus();
      await userEvent.keyboard('[ArrowRight]');

      expect(change).toHaveBeenLastCalledWith([1, 9], 0);

      rightThumb.focus();
      await userEvent.keyboard('[ArrowLeft]');

      expect(change).toHaveBeenLastCalledWith([0, 8], 1);
    });
  });

  /**
   * Render tests
   */
  describe('Render tests', () => {
    it('should unmount without errors', () => {
      const { unmount } = render(
        <Slider dataTestId={dataTestId} stepCount={10} />,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
