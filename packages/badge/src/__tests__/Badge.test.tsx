import React from 'react';
import { render } from '@testing-library/react';

import Badge from '../Badge';

const dataTestId = 'test-id';

describe('Badge', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Badge dataTestId={dataTestId}> $250 off </Badge>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Badge>$250</Badge>);

      expect(container.firstElementChild).toHaveTextContent('$250');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `color` class', () => {
      const { container } = render(<Badge color="primary"> $250 off </Badge>);

      expect(container.firstElementChild).toHaveClass('badge_primary');
    });

    it('should set default `badge` class', () => {
      const { container } = render(<Badge color="primary"> $250 off </Badge>);

      expect(container.firstElementChild).toHaveClass('badge');
    });
  });

  /**
   * Custom component
   */
  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      render(
        <Badge Component={cb} dataTestId={dataTestId}>
          Bagde
        </Badge>,
      );

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Badge> $250 off </Badge>);

    expect(unmount).not.toThrowError();
  });
});
