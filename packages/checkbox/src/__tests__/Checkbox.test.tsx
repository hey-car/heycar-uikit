/* eslint-disable prettier/prettier */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  describe('Prop tests', () => {
    it('should set label" & "sets component as "checked" on click', () => {
      const { container } = render(
        <Checkbox
          checked={false}
          label="Checkbox default value"
          onChange={() => {
            console.log('test');
          }}
        />,
      );

      expect(container.querySelector('label')).toHaveTextContent(
        'Checkbox default value',
      );

      const checkbox = container.querySelectorAll(
        "input[type='checkbox']",
      )[0] as HTMLInputElement;

      fireEvent.click(checkbox);

      expect(checkbox.checked).toBe(true);
    });
  });
});
