import React from 'react';
import { render } from '@testing-library/react';

import Chip from '../Chip';

const dataTestId = 'test-id';
const defaultChild = 'text';

describe('Chip', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Chip dataTestId={dataTestId}>{defaultChild} </Chip>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set text', () => {
      const { container } = render(<Chip>{defaultChild}</Chip>);

      expect(container.firstElementChild).toHaveTextContent(defaultChild);
    });

    it('should set Component', () => {
      const { getByTestId } = render(
        <Chip Component="span" dataTestId={dataTestId}>
          {defaultChild}
        </Chip>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('SPAN');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `disabled` class when disabled', () => {
      const { container } = render(
        <Chip disabled={true}>{defaultChild} </Chip>,
      );

      expect(container.firstElementChild).toHaveClass('disabled');
    });

    it('should set filter `variant` class', () => {
      const { container } = render(
        <Chip variant="filter">{defaultChild} </Chip>,
      );

      expect(container.firstElementChild).toHaveClass('filter');
    });

    it('should set choice `variant` class', () => {
      const { container } = render(
        <Chip variant="choice">{defaultChild} </Chip>,
      );

      expect(container.firstElementChild).toHaveClass('choice');
    });

    it('should be selected ', () => {
      const { container } = render(
        <Chip selected={true} variant="choice">
          {defaultChild}{' '}
        </Chip>,
      );

      expect(container.firstElementChild).toHaveClass('chipSelected');
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
        <Chip Component={cb} dataTestId={dataTestId}>
          Chip
        </Chip>,
      );

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Chip>{defaultChild} </Chip>);

    expect(unmount).not.toThrowError();
  });
});
