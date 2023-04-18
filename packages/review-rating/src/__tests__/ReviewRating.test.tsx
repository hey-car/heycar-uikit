/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render } from '@testing-library/react';

import ReviewRating from '../ReviewRating';

const dataTestId = 'test-id';

const observe = jest.fn();
const unobserve = jest.fn();

// @ts-ignore // no point in me mocking every method on the IO
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('ReviewRating', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <ReviewRating dataTestId={dataTestId} score={0} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set ARIA label to the score out of 10', () => {
      const { getByLabelText } = render(
        <ReviewRating dataTestId={dataTestId} score={5} />,
      );

      expect(getByLabelText('5 / 10')).toBeInTheDocument();
    });

    it('should forward ref to ReviewRating', () => {
      const textareaRef = jest.fn();
      const { getByTestId } = render(
        <ReviewRating dataTestId={dataTestId} ref={textareaRef} score={5} />,
      );

      expect(textareaRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(
        <ReviewRating
          className={className}
          dataTestId={dataTestId}
          score={5}
        />,
      );

      expect(container.firstElementChild).toHaveClass(className);
    });
  });

  /**
   * Render tests
   */
  describe('Render tests', () => {
    it('should contain the score out of 10', () => {
      const { getByText } = render(
        <ReviewRating dataTestId={dataTestId} score={5} />,
      );

      // score is spread across 2 spans
      expect(getByText('5', { selector: 'span' })).toBeInTheDocument();
      expect(getByText('/10', { selector: 'span' })).toBeInTheDocument();
    });

    it('should call observe on mount', () => {
      render(<ReviewRating dataTestId={dataTestId} score={5} />);

      // score is spread across 2 spans
      expect(observe).toHaveBeenCalled();
    });

    it('should unmount without errors', () => {
      const { unmount } = render(
        <ReviewRating dataTestId={dataTestId} score={5} />,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
