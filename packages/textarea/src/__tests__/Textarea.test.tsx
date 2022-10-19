import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Textarea from '../Textarea';
const dataTestId = 'test-id';
const label = 'label';

describe('Textarea', () => {
  it('should forward ref to html input', () => {
    const inputRef = jest.fn();
    const { getByTestId } = render(
      <Textarea dataTestId={dataTestId} ref={inputRef} />,
    );

    expect(inputRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
  });

  it('should set counter', () => {
    const maxLength = 20;
    const labelLength = label.length;
    const { getByText } = render(
      <Textarea
        dataTestId={dataTestId}
        label={label}
        maxLength={maxLength}
        value={label}
      />,
    );

    expect(getByText(`/${maxLength}`)).toBeInTheDocument();
    expect(getByText(`${labelLength}`)).toBeInTheDocument();
  });

  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute to input', () => {
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} fullWidth={true} />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('TEXTAREA');
    });

    it('should set `aria-label` attribute to textarea', () => {
      const { getByLabelText } = render(<Textarea label={label} />);

      expect(getByLabelText(label).tagName).toBe('TEXTAREA');
    });

    it('should set `disabled` attribute', () => {
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} disabled={true} />,
      );

      expect(getByTestId(dataTestId)).toHaveAttribute('disabled');
    });

    it('should render error hint', () => {
      const { container } = render(
        <Textarea error="This is the placeholder for error note" />,
      );

      expect(container.getElementsByClassName('error').length).toBe(1);
    });
  });

  describe('Classes tests', () => {
    it('should set `className` class to textarea', () => {
      const { container } = render(<Textarea className="test-class" />);

      expect(container.querySelector('.test-class')).toHaveClass('textarea');
    });
  });

  describe('Callbacks tests', () => {
    it('should call `onChange` prop', () => {
      const cb = jest.fn();
      const value = '123';
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} onChange={cb} />,
      );
      const textarea = getByTestId(dataTestId) as HTMLInputElement;

      fireEvent.change(textarea, { target: { value } });

      expect(cb).toBeCalledTimes(1);
      expect(textarea.value).toBe(value);
    });

    it('should call `onFocus` prop', () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} onFocus={cb} />,
      );

      fireEvent.focus(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should call `onBlur` prop', () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} onBlur={cb} />,
      );

      fireEvent.blur(getByTestId(dataTestId));

      expect(cb).toBeCalledTimes(1);
    });

    it('should not call `onChange` prop if disabled', async () => {
      const cb = jest.fn();
      const { getByTestId } = render(
        <Textarea dataTestId={dataTestId} disabled={true} onChange={cb} />,
      );
      const textarea = getByTestId(dataTestId) as HTMLInputElement;

      await userEvent.type(textarea, '123');

      expect(cb).not.toBeCalled();
    });
  });

  it('should set aria-label=title access', () => {
    const { getByTestId } = render(
      <Textarea dataTestId={dataTestId} label={label} />,
    );

    expect(getByTestId(dataTestId)).toHaveAttribute('aria-label', label);
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Textarea onChange={jest.fn()} value="value" />);

    expect(unmount).not.toThrowError();
  });
});
