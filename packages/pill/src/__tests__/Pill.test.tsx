import React from 'react';
import { render } from '@testing-library/react';

import Pill from '../Pill';

const dataTestId = 'test-id';
const defaultChild = 'text';

describe('Pill', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Pill dataTestId={dataTestId}>{defaultChild} </Pill>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Pill>{defaultChild}</Pill>);

      expect(container.firstElementChild).toHaveTextContent(defaultChild);
    });

    it('should set leftIcon', () => {
      const { container } = render(
        <Pill leftIcon={<span>Left</span>}>{defaultChild}</Pill>,
      );

      expect(container.firstElementChild).toContainHTML('<span>Left</span>');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set default `pill` class', () => {
      const { container } = render(<Pill>{defaultChild} </Pill>);

      expect(container.firstElementChild).toHaveClass('pill');
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
        <Pill Component={cb} dataTestId={dataTestId}>
          Pill
        </Pill>,
      );

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Pill>{defaultChild} </Pill>);

    expect(unmount).not.toThrowError();
  });
});
