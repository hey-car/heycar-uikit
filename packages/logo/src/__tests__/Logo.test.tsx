import React from 'react';
import { render } from '@testing-library/react';

import Logo from '../Logo';

const dataTestId = 'test-id';

describe('Logo', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Logo dataTestId={dataTestId} fontSize={12} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('svg');
    });

    it('should set viewBox attribute', () => {
      const { container } = render(<Logo fontSize={20} />);

      expect(container.firstElementChild).toHaveAttribute('viewBox');
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Logo fontSize={12} />);

    expect(unmount).not.toThrowError();
  });
});
