import React from 'react';
import { render } from '@testing-library/react';

import Logo from '../Logo';

const dataTestId = 'test-id';
const title = 'Title logo';

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

  it('should set aria-hidden=false', () => {
    const { container } = render(
      <Logo ariaHidden={false} fontSize={20} title={title} />,
    );

    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'false');
  });

  it('should set role=img', () => {
    const { container } = render(
      <Logo fontSize={20} role="img" title={title} />,
    );

    expect(container.firstElementChild).toHaveAttribute('role', 'img');
  });

  it('should set xmlns', () => {
    const { container } = render(
      <Logo fontSize={20} role="img" title={title} />,
    );

    expect(container.firstElementChild).toHaveAttribute(
      'xmlns',
      'http://www.w3.org/2000/svg',
    );
  });

  it('should set aria-label=title ', () => {
    const { container } = render(<Logo ariaLabel={title} fontSize={20} />);

    expect(container.firstElementChild).toHaveAttribute('aria-label', title);
  });

  it('should set default value for viewBox=0 0 24 24', () => {
    const { container } = render(<Logo fontSize={20} />);

    expect(container.firstElementChild).toHaveAttribute(
      'viewBox',
      '0 0 199 65',
    );
  });
});

/**
 * Inline styles
 */
describe('Inline styles', () => {
  it('should set fontSize="inherit"', () => {
    const { container } = render(<Logo fontSize={20} />);

    expect(container.firstElementChild).toHaveStyle('font-size: 20px');
  });

  it('should set fontSize="90"', () => {
    const { container } = render(<Logo fontSize={90} />);

    expect(container.firstElementChild).toHaveStyle('font-size: 90px');
  });
});

/**
 * Classes tests
 */
describe('Classes tests', () => {
  it('should set default `logo` class', () => {
    const { container } = render(<Logo color="primary" fontSize={20} />);

    expect(container.firstElementChild).toHaveClass('logo');
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Logo fontSize={20} />);

    expect(unmount).not.toThrowError();
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Logo fontSize={12} />);

    expect(unmount).not.toThrowError();
  });
});
