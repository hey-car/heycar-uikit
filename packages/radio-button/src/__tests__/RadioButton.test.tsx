/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RadioButton from '../RadioButton';

describe('RadioButton', () => {
  describe('Prop tests', () => {
    it('sets `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <RadioButton
          checked={false}
          dataTestId="radioButton-test"
          onChange={() => {}}
        />,
      );

      expect(getByTestId('radioButton-test').tagName).toBe('INPUT');
    });

    it('sets the name', () => {
      const { getByTestId } = render(
        <RadioButton
          checked={false}
          dataTestId="radioButton-test"
          name="test-radio-group"
          onChange={() => {}}
        />,
      );

      expect(getByTestId('radioButton-test')).toHaveAttribute(
        'name',
        'test-radio-group',
      );
    });

    it('sets component as checked', () => {
      const { getByRole } = render(
        <RadioButton checked={true} onChange={() => {}} />,
      );

      expect(getByRole('radio')).toBeChecked();
    });

    it('sets component as disabled', () => {
      const { getByRole } = render(
        <RadioButton checked={true} disabled={true} onChange={() => {}} />,
      );

      expect(getByRole('radio')).toBeDisabled();
    });

    it('forwards ref to component', () => {
      const testRef = jest.fn();
      const { getByTestId } = render(
        <RadioButton
          checked={true}
          dataTestId="radioButton-test"
          onChange={() => {}}
          ref={testRef}
        />,
      );

      expect(testRef.mock.calls).toEqual([[getByTestId('radioButton-test')]]);
    });
  });

  describe('Interaction tests', () => {
    it('calls on change event on click', () => {
      const handleChange = jest.fn();
      const { getByRole } = render(
        <RadioButton checked={false} onChange={handleChange} />,
      );

      const radioButton = getByRole('radio');

      userEvent.click(radioButton);

      expect(handleChange).toHaveBeenCalled();
    });

    it('doesnt call on change event if disabled', () => {
      const handleChange = jest.fn();
      const { getByRole } = render(
        <RadioButton checked={false} disabled={true} onChange={handleChange} />,
      );

      const radioButton = getByRole('radio');

      userEvent.click(radioButton);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
