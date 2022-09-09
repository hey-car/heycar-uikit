import React from 'react';
import { render } from '@testing-library/react';

import FormControl from '../FormControl';

describe('FormControl', () => {
  it('should set `data-test-id` atribute', () => {
    const dataTestId = 'test-id';
    const { getByTestId } = render(
      <FormControl block={true} dataTestId={dataTestId} />,
    );

    expect(getByTestId(dataTestId)).toBeTruthy();
  });

  describe('Classes tests', () => {
    it('should set `className` class to root', () => {
      const className = 'test-class';
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl className={className} dataTestId={dataTestId} />,
      );

      expect(getByTestId(dataTestId)).toHaveClass(className);
    });

    it('should set `labelClassName` class to label', () => {
      const className = 'test-class';
      const { container } = render(<FormControl label="label" />);

      expect(container.getElementsByClassName(className).length).toBe(1);
    });

    it('should set `addonsClassName` class to addons', () => {
      const className = 'test-class';
      const { container } = render(
        <FormControl
          leftIcon={<div>Left addons</div>}
          rightAddons={<div>Right addons</div>}
        />,
      );

      expect(container.getElementsByClassName(className).length).toBe(2);
    });

    it('should set `size` class', () => {
      const size = 'm';
      const { container } = render(<FormControl />);

      expect(container.firstElementChild).toHaveClass(size);
    });

    it('should set `block` class', () => {
      const { container } = render(<FormControl block={true} />);

      expect(container.firstElementChild).toHaveClass('block');
    });

    it('should set `hasError` class', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} error="error" />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('hasError');
    });

    it('should set `filled` class', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} filled={true} />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('filled');
    });

    it('should set `disabled`', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} disabled={true} />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('disabled');
    });

    it('should set `focused`', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} focused={true} />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('focused');
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<FormControl />);

    expect(unmount).not.toThrowError();
  });
});
