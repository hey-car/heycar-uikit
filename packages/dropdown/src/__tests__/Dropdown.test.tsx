/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  describe('Prop tests', () => {
    it('should set value', () => {
      const { container } = render(
        <Dropdown
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.querySelector('span')).toHaveTextContent('Mango');
    });


    it('should set options', () => {
      const { container } = render(
        <Dropdown
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.getElementsByTagName('li')).toHaveLength(3);
    });
  });

  describe('State tests', () => {
    it('should set state disabled', () => {
      const { container } = render(
        <Dropdown
          disabled={true}
          onChange={() => { }}
          options={[
            {
              value: 'pomelo',
              label: 'Pomelo',
            },
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'mango',
              label: 'Mango',
            },
          ]}
          value={{
            value: 'mango',
            label: 'Mango',
          }}
        />,
      );

      expect(container.querySelector('span')).toHaveClass('disabled');
    });
  });
});
