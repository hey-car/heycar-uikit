import React from 'react';
import { render } from '@testing-library/react';

import FormControl from '../FormControl';

describe('FormControl', () => {
  it('should set `data-test-id` attribute', () => {
    const dataTestId = 'test-id';
    const { getByTestId } = render(<FormControl dataTestId={dataTestId} />);

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

    it('should set `disabled`', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} disabled={true} />,
      );

      expect(getByTestId(dataTestId)).toHaveClass('disabled');
    });

    it('should set `filled` class', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} filled={true} />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('filled');
    });

    it('should set `focused`', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} focused={true} />,
      );

      expect(getByTestId(dataTestId).firstElementChild).toHaveClass('focused');
    });
    it('should set `hint` class and message', () => {
      const dataTestId = 'test-id';
      const hintMessage = 'hint message';
      const { container } = render(
        <FormControl dataTestId={dataTestId} hint={hintMessage} />,
      );

      expect(container.getElementsByClassName('hint').length).toBe(1);
    });

    it('should set `error` if hint & error passed together', () => {
      const dataTestId = 'test-id';
      const hintMessage = 'hint message';
      const errorMessage = 'error message';
      const { container } = render(
        <FormControl
          dataTestId={dataTestId}
          error={errorMessage}
          hint={hintMessage}
        />,
      );

      expect(container.getElementsByClassName('error').length).toBe(1);
      expect(container.getElementsByClassName('hint').length).toBe(0);
    });

    it('should set `error` class and message', () => {
      const dataTestId = 'test-id';
      const errorMessage = 'error message';
      const { getByText } = render(
        <FormControl dataTestId={dataTestId} error={errorMessage} />,
      );

      expect(getByText(errorMessage)).toHaveClass('error');
    });

    it('should set `hasError` class', () => {
      const dataTestId = 'test-id';
      const { getByTestId } = render(
        <FormControl dataTestId={dataTestId} error="error" />,
      );

      expect(getByTestId(dataTestId)).toHaveClass('hasError');
    });

    it('should set `label` class', () => {
      const labelText = 'label';
      const { container } = render(<FormControl label={labelText} />);

      expect(container.getElementsByClassName('label').length).toBe(1);
    });

    it('should set `fullWidth` class', () => {
      const { container } = render(<FormControl fullWidth={true} />);

      expect(container.firstElementChild).toHaveClass('fullWidth');
    });

    it('should set `leftIcon` class', () => {
      const { container } = render(<FormControl leftIcon={<div>🚗</div>} />);

      expect(container.getElementsByClassName('leftIcon').length).toBe(1);
      expect(container.getElementsByClassName('addons').length).toBe(1);
    });

    it('should set `rightIcon` class', () => {
      const { container } = render(<FormControl rightIcon={<div>🚗</div>} />);

      expect(container.getElementsByClassName('rightIcon').length).toBe(1);
      expect(container.getElementsByClassName('addons').length).toBe(1);
    });

    it('should set `rightAddons` class', () => {
      const { container } = render(<FormControl rightAddons={<div>🚗</div>} />);

      expect(container.getElementsByClassName('rightAddons').length).toBe(1);
      expect(container.getElementsByClassName('addons').length).toBe(1);
    });

    it('should set `bottomAddons` class', () => {
      const bottomAddons = 'Bottom addons';
      const dataTestId = 'test-id';
      const { getByText } = render(
        <FormControl bottomAddons={bottomAddons} dataTestId={dataTestId} />,
      );

      expect(getByText(bottomAddons)).toBeTruthy();
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<FormControl />);

    expect(unmount).not.toThrowError();
  });
});
