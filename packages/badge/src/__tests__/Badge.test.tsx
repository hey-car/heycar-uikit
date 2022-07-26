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
      const { getByTestId } = render(<Badge dataTestId={dataTestId} />);

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Badge text="text" />);

      expect(container.firstElementChild).toHaveTextContent('text');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `color` class', () => {
      const { container } = render(<Badge color="primary" />);

      expect(container.firstElementChild).toHaveClass('badge-primary');
    });
  });
});
