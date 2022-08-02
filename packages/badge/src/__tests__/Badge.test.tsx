import React from 'react';
import { render } from '@testing-library/react';

import Badge from '../Badge';

const dataTestId = 'test-id';
const defaultChild = '$250 off';

describe('Badge', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Badge dataTestId={dataTestId}>{defaultChild} </Badge>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Badge>$250 off</Badge>);

      expect(container.firstElementChild).toHaveTextContent('$250 off');
    });

    it('should set leftIcon', () => {
      const { container } = render(
        <Badge leftIcon={<span>Left</span>}>$250</Badge>,
      );

      expect(container.firstElementChild).toContainHTML('<span>Left</span>');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `color` class', () => {
      const { container } = render(
        <Badge color="primary">{defaultChild} </Badge>,
      );

      expect(container.firstElementChild).toHaveClass('badge_primary');
    });

    it('should set color warning', () => {
      const { container } = render(<Badge color="warning">$250</Badge>);

      expect(container.firstElementChild).toHaveClass('badge_warning');
    });

    it('should set default `badge` class', () => {
      const { container } = render(
        <Badge color="primary">{defaultChild} </Badge>,
      );

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
    const { unmount } = render(<Badge>{defaultChild} </Badge>);

    expect(unmount).not.toThrowError();
  });
});
