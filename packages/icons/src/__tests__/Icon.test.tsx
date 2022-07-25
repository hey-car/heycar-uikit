import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { ABSport as Icon } from '../paths/ABSport';

const dataTestId = 'test-id';
const titleAccess = 'Title icon';

describe('Icon', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(<Icon dataTestId={dataTestId} />);

      expect(getByTestId(dataTestId).tagName).toBe('svg');
    });

    it('should set aria-hidden=false', () => {
      const { container } = render(<Icon titleAccess={titleAccess} />);

      expect(container.firstElementChild).toHaveAttribute(
        'aria-hidden',
        'false',
      );
    });

    it('should set role=img', () => {
      const { container } = render(<Icon titleAccess={titleAccess} />);

      expect(container.firstElementChild).toHaveAttribute('role', 'img');
    });

    it('should set aria-label=title access', () => {
      const { container } = render(<Icon titleAccess={titleAccess} />);

      expect(container.firstElementChild).toHaveAttribute(
        'aria-label',
        titleAccess,
      );
    });

    it('should set default value for focusable=false', () => {
      const { container } = render(<Icon />);

      expect(container.firstElementChild).toHaveAttribute('focusable', 'false');
    });

    it('should set default value for viewBox=0 0 24 24', () => {
      const { container } = render(<Icon />);

      expect(container.firstElementChild).toHaveAttribute(
        'viewBox',
        '0 0 24 24',
      );
    });

    it('should set viewBox', () => {
      const { container } = render(<Icon viewBox="0 0 40 40" />);

      expect(container.firstElementChild).toHaveAttribute(
        'viewBox',
        '0 0 40 40',
      );
    });
  });

  /**
   * Inline styles
   */
  describe('Inline styles', () => {
    it('should set fontSize="inherit"', () => {
      const { container } = render(<Icon fontSize="inherit" />);

      expect(container.firstElementChild).toHaveStyle('font-size: inherit');
    });

    it('should set fontSize="90"', () => {
      const { container } = render(<Icon fontSize={90} />);

      expect(container.firstElementChild).toHaveStyle('font-size: 90px');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(<Icon className={className} />);

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set default `className`', () => {
      const className = 'svgIcon';
      const { container } = render(<Icon />);

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set default `color=inherit` class', () => {
      const size = 'inherit';
      const { container } = render(<Icon />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `color=primary` class', () => {
      const size = 'primary';
      const { container } = render(<Icon color={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `color=secondary` class', () => {
      const size = 'secondary';
      const { container } = render(<Icon color={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `color=tertiary` class', () => {
      const size = 'tertiary';
      const { container } = render(<Icon color={size} />);

      expect(container.firstElementChild).toHaveClass(size);
    });
  });

  /**
   * Callbacks tests
   */
  describe('Callbacks tests', () => {
    it('should call `onClick` prop', () => {
      const cb = jest.fn();

      const { getByTestId } = render(
        <Icon dataTestId={dataTestId} onClick={cb} />,
      );

      fireEvent.click(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });
  });

  /**
   * Custom component
   */
  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      render(<Icon Component={cb} dataTestId={dataTestId} />);

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Icon />);

    expect(unmount).not.toThrowError();
  });
});
