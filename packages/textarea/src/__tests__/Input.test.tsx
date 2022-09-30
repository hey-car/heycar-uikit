import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Textarea';
const dataTestId = 'test-id';

describe('Input', () => {
  it('should forward ref to html input', () => {
    const inputRef = jest.fn();
    const { getByTestId } = render(
      <Input dataTestId={dataTestId} ref={inputRef} />,
    );

    expect(inputRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
  });

  describe('Callbacks tests', () => {
    it('should set `data-test-id` attribute to input', () => {
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} fullWidth={true} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('INPUT');
    });

    it('should set `aria-label` attribute to input', () => {
      const label = 'label';
      const { getByLabelText } = render(<Input label={label} />);

      expect(getByLabelText(label).tagName).toBe('INPUT');
    });

    it('should set `disabled` attribute', () => {
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} disabled={true} />,
      );

      expect(getByTestId(dataTestId)).toHaveAttribute('disabled');
    });

    it('should render error hint', () => {
      const { container } = render(
        <Input error="This is the placeholder for error note" />,
      );

      expect(container.getElementsByClassName('error').length).toBe(1);
    });
  });

  describe('Classes tests', () => {
    it('should set `className` class to input', () => {
      const { container } = render(<Input className="test-class" />);

      expect(container.querySelector('.test-class')).toHaveClass('input');
    });

    it('should set `hasLeftIcon` class to input', () => {
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} leftIcon="🚗" value="value" />,
      );

      expect(getByTestId(dataTestId)).toHaveClass('hasLeftIcon');
    });
  });

  describe('Callbacks tests', () => {
    it('should call `onChange` prop', () => {
      const cb = jest.fn();
      const value = '123';
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} onChange={cb} />,
      );

      const input = getByTestId(dataTestId) as HTMLInputElement;

      fireEvent.change(input, { target: { value } });

      expect(cb).toBeCalledTimes(1);
      expect(input.value).toBe(value);
    });

    it('should call `onFocus` prop', () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} onFocus={cb} />,
      );

      fireEvent.focus(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should call `onBlur` prop', () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} onBlur={cb} />,
      );

      fireEvent.blur(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should not call `onChange` prop if disabled', async () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Input dataTestId={dataTestId} disabled={true} onChange={cb} />,
      );

      const input = getByTestId(dataTestId) as HTMLInputElement;

      await userEvent.type(input, '123');

      expect(cb).not.toBeCalled();
    });
  });

  it('should set aria-label=title access', () => {
    const label = 'Label';
    const { getByTestId } = render(
      <Input dataTestId={dataTestId} label={label} />,
    );

    expect(getByTestId(dataTestId)).toHaveAttribute('aria-label', label);
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Input onChange={jest.fn()} value="value" />);

    expect(unmount).not.toThrowError();
  });
});
