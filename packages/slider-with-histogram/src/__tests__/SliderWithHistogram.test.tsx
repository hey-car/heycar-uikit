/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react';

import SliderWithHistogram from '../SliderWithHistogram';

const dataTestId = 'test-id';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('SliderWithHistogram', () => {
  const defaultData = [0, 1, 2, 3, 4, 3, 2, 0];

  /**
   * Render tests
   */
  describe('Render tests', () => {
    it('should render a histogram and slider', () => {
      const { getByTestId, getAllByRole } = render(
        <SliderWithHistogram data={defaultData} dataTestId={dataTestId} />,
      );

      expect(getByTestId('histogram')).toBeInTheDocument();
      expect(getAllByRole('slider')[0]).toBeInTheDocument();
      expect(getAllByRole('slider')[1]).toBeInTheDocument();
    });

    it('should unmount without errors', () => {
      const { unmount } = render(
        <SliderWithHistogram data={defaultData} dataTestId={dataTestId} />,
      );

      expect(unmount).not.toThrowError();
    });
  });

  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <SliderWithHistogram data={defaultData} dataTestId={dataTestId} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set custom ARIA label for the thumbs', () => {
      const locale = {
        thumb1: 'Test thumb 1',
        thumb2: 'Test thumb 2',
        loading: 'please wait',
      };
      const { getByRole, getByText } = render(
        <SliderWithHistogram
          data={defaultData}
          dataTestId={dataTestId}
          isLoading={true}
          locale={locale}
        />,
      );

      expect(getByRole('slider', { name: locale.thumb1 })).toBeInTheDocument();
      expect(getByRole('slider', { name: locale.thumb2 })).toBeInTheDocument();
      expect(getByText('please wait')).toBeInTheDocument();
    });
  });

  /**
   * Default states tests
   */
  describe('Default states tests', () => {
    it('sets initial values for both thumbs', () => {
      const { getByRole } = render(
        <SliderWithHistogram
          data={defaultData}
          dataTestId={dataTestId}
          selectedRangeIndexes={[4, 5]}
        />,
      );

      expect(getByRole('slider', { name: 'Lower thumb' })).toHaveAttribute(
        'aria-valuenow',
        '4',
      );
      expect(getByRole('slider', { name: 'Upper thumb' })).toHaveAttribute(
        'aria-valuenow',
        '5',
      );
    });

    it('sets loading state and doesnt render histogram when isLoading is true', () => {
      const { queryByTestId, getByText } = render(
        <SliderWithHistogram
          data={defaultData}
          dataTestId={dataTestId}
          isLoading={true}
        />,
      );

      expect(getByText('Loading...')).toBeInTheDocument();
      expect(queryByTestId('histogram')).not.toBeInTheDocument();
    });

    it('sets doesnt render histogram when hide is true', () => {
      const { queryByTestId } = render(
        <SliderWithHistogram
          data={defaultData}
          dataTestId={dataTestId}
          hide={true}
        />,
      );

      expect(queryByTestId('histogram')).not.toBeInTheDocument();
    });
  });

  /**
   * Interaction tests
   */
  describe('Interaction tests', () => {
    it('Shows label then thumb is active', async () => {
      const { getByRole, getByText } = render(
        <SliderWithHistogram
          ariaValueText="tooltip-"
          data={defaultData}
          dataTestId={dataTestId}
        />,
      );

      const leftThumb = getByRole('slider', { name: 'Lower thumb' });
      const rightThumb = getByRole('slider', { name: 'Upper thumb' });

      leftThumb.focus();
      expect(getByText('tooltip-0')).toBeInTheDocument();

      rightThumb.focus();
      expect(
        getByText(`tooltip-${defaultData.length - 1}`),
      ).toBeInTheDocument();
    });
  });
});
