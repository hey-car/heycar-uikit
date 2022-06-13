import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

const pangram = 'The quick brown fox jumps over the lazy dog.';
const dataTestId = 'test-id';

describe('Typography', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Typography dataTestId={dataTestId}>{pangram}</Typography>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('P');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(
        <Typography className={className}>{pangram}</Typography>,
      );

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `size` class', () => {
      const variant = 'h3';
      const { container } = render(
        <Typography variant={variant}>{pangram}</Typography>,
      );

      expect(container.firstElementChild).toHaveClass(variant);
    });
  });

  /**
   * Custom component
   */
  describe('General tests', () => {
    it('should set `variant`', () => {
      const { container } = render(
        <Typography variant="h1">{pangram}</Typography>,
      );

      expect(container.firstElementChild).toHaveClass('h1');
    });

    it('should have correct html tag', () => {
      const { container } = render(
        <Typography Component="span" variant="h1">
          {pangram}
        </Typography>,
      );

      const originalHtmlElement = container.querySelector('h1');
      const newHtmlElement = container.querySelector('span');

      expect(originalHtmlElement).toBeNull();
      expect(newHtmlElement).toHaveTextContent(pangram);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Typography>{pangram}</Typography>);

    expect(unmount).not.toThrowError();
  });
});
