import React, { MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button from '../Button';

const dataTestId = 'test-id';

describe('Button', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(<Button dataTestId={dataTestId} />);

      expect(getByTestId(dataTestId).tagName).toBe('BUTTON');
    });

    it('should set default attribute', () => {
      const { container } = render(<Button disabled={true} />);

      expect(container.firstElementChild).toHaveAttribute('disabled');
    });

    it('should set type attribute', () => {
      const type = 'submit';
      const { container } = render(<Button type={type} />);

      expect(container.firstElementChild).toHaveAttribute('type', type);
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(<Button className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `size` class default value', () => {
      const { container } = render(<Button />);

      expect(container.firstElementChild).toHaveClass('large');
    });

    it('should set `size` class', () => {
      const size = 'small';
      const { container } = render(<Button size={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `full width` class', () => {
      const { container } = render(<Button fullWidth={true} />);

      expect(container.firstElementChild).toHaveClass('fullWidth');
    });

    it('should set `variant` class default value', () => {
      const { container } = render(<Button />);

      expect(container.firstElementChild).toHaveClass('contained');
    });

    it('should set `variant` class', () => {
      const variant = 'outlined';
      const { container } = render(<Button variant={variant} />);

      expect(container.firstElementChild).toHaveClass(variant);
    });

    it('should set `color` class default value', () => {
      const { container } = render(<Button />);

      expect(container.firstElementChild).toHaveClass('primary');
    });

    it('should set `color` class', () => {
      const color = 'tertiary';
      const { container } = render(<Button color={color} />);

      expect(container.firstElementChild).toHaveClass(color);
    });

    it('should set `loading` class', () => {
      const { container } = render(<Button loading={true} />);

      expect(container.firstElementChild).toHaveClass('loading');
    });
  });

  /**
   * Callbacks tests
   */
  describe('Callbacks tests', () => {
    it('should call `onClick` prop', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Button dataTestId={dataTestId} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should not call `onClick` prop if disabled', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Button dataTestId={dataTestId} disabled={true} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).not.toBeCalled();
    });

    it('target should contain button element', () => {
      const { getByTestId } = render(
        <Button dataTestId={dataTestId} onClick={cb} />,
      );

      const buttonNode = getByTestId(dataTestId);

      function cb(event: MouseEvent<HTMLButtonElement>) {
        expect(event.target).toBe(buttonNode);
      }

      fireEvent.click(buttonNode, { target: buttonNode });
    });

    it('target should contain anchor element', () => {
      const { getByTestId } = render(
        <Button dataTestId={dataTestId} href="#" onClick={cb} />,
      );

      const anchorNode = getByTestId(dataTestId);

      function cb(event: MouseEvent<HTMLAnchorElement>) {
        expect(event.target).toBe(anchorNode);
      }

      fireEvent.click(anchorNode, { target: anchorNode });
    });
  });

  /**
   * Custom component
   */
  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      render(<Button Component={cb} dataTestId={dataTestId} />);

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(
      <Button leftIcon={<span>Left</span>} rightIcon={<span>Right</span>}>
        Text
      </Button>,
    );

    expect(unmount).not.toThrowError();
  });
});
