import React, { MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';

import Logo from '../Logo';

const dataTestId = 'test-id';

describe('Logo', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(<Logo dataTestId={dataTestId} />);

      expect(getByTestId(dataTestId).tagName).toBe('LOGO');
    });

    it('should set default attribute', () => {
      const { container } = render(<Logo fontSize={20} />);

      expect(container.firstElementChild).toHaveAttribute('disabled');
    });

    it('should set type attribute', () => {
      const type = 'submit';
      const { container } = render(<Logo type={type} />);

      expect(container.firstElementChild).toHaveAttribute('type', type);
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(<Logo className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `size` class', () => {
      const size = 'large';
      const { container } = render(<Logo size={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `full width` class', () => {
      const { container } = render(<Logo fullWidth={true} />);

      expect(container.firstElementChild).toHaveClass('fullWidth');
    });

    it('should set `variant` class', () => {
      const variant = 'contained';
      const { container } = render(<Logo variant={variant} />);

      expect(container.firstElementChild).toHaveClass(variant);
    });

    it('should set `color` class', () => {
      const color = 'primary';
      const { container } = render(<Logo color={color} />);

      expect(container.firstElementChild).toHaveClass(color);
    });

    it('should set `loading` class', () => {
      const { container } = render(<Logo loading={true} />);

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
        <Logo dataTestId={dataTestId} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should not call `onClick` prop if disabled', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Logo dataTestId={dataTestId} disabled={true} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).not.toBeCalled();
    });

    it('target should contain logo element', () => {
      const { getByTestId } = render(
        <Logo dataTestId={dataTestId} onClick={cb} />,
      );

      const logoNode = getByTestId(dataTestId);

      function cb(event: MouseEvent<HTMLLogoElement>) {
        expect(event.target).toBe(logoNode);
      }

      fireEvent.click(logoNode, { target: logoNode });
    });

    it('target should contain anchor element', () => {
      const { getByTestId } = render(
        <Logo dataTestId={dataTestId} href="#" onClick={cb} />,
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

      render(<Logo Component={cb} dataTestId={dataTestId} />);

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(
      <Logo leftIcon={<span>Left</span>} rightIcon={<span>Right</span>}>
        Text
      </Logo>,
    );

    expect(unmount).not.toThrowError();
  });
});
