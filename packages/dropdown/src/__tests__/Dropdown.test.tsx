import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown';
const dataTestId = 'test-id';

describe('Dropdown', () => {
  describe('Callbacks tests', () => {
    it('should set `disabled` attribute', () => {
      const { container } = render(
        <Dropdown dataTestId={dataTestId} disabled={true} />,
      );

      expect(container.querySelector('.select')).toHaveAttribute('disabled');
    });
  });

  describe('Classes tests', () => {
    it('should set `className` class to input', () => {
      const { container } = render(
        <Dropdown className="select" dataTestId={dataTestId} />,
      );

      expect(container.querySelector('.select')).toHaveClass('dropdown select');
    });
  });

  describe('unmount tests', () => {
    it('should unmount without errors', () => {
      const { unmount } = render(
        <Dropdown onChange={jest.fn()} value="value" />,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
