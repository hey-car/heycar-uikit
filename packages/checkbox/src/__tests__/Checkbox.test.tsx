/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  describe('Prop tests', () => {
    it('sets `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Checkbox
          checked={false}
          dataTestId="checkbox-test"
          onChange={() => {}}
        />,
      );

      expect(getByTestId('checkbox-test').tagName).toBe('LABEL');
    });

    it('sets the label', () => {
      const { getByLabelText } = render(
        <Checkbox
          checked={false}
          label="Checkbox default value"
          onChange={() => {}}
        />,
      );

      expect(getByLabelText('Checkbox default value')).toBeInTheDocument();
    });

    it('sets component as checked', () => {
      const { getByRole } = render(
        <Checkbox
          checked={true}
          label="Checkbox default value"
          onChange={() => {}}
        />,
      );

      expect(getByRole('checkbox')).toBeChecked();
    });

    it('sets component as disabled', () => {
      const { getByRole } = render(
        <Checkbox
          checked={true}
          disabled={true}
          label="Checkbox default value"
          onChange={() => {}}
        />,
      );

      expect(getByRole('checkbox')).toBeDisabled();
    });
  });

  describe('Interaction tests', () => {
    it('calls on change event on click', () => {
      const handleChange = jest.fn();
      const { getByRole } = render(
        <Checkbox
          checked={false}
          label="Checkbox default value"
          onChange={handleChange}
        />,
      );

      const checkbox = getByRole('checkbox');

      userEvent.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });

    it('doesnt call on change event if disabled', () => {
      const handleChange = jest.fn();
      const { getByRole } = render(
        <Checkbox
          checked={false}
          disabled={true}
          label="Checkbox default value"
          onChange={handleChange}
        />,
      );

      const checkbox = getByRole('checkbox');

      userEvent.click(checkbox);

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
