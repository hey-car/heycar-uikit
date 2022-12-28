import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown';

describe('Dropdown Snapshots tests', () => {
  it('should match callback methods', () => {
    expect(
      render(
        <Dropdown
          onChange={jest.fn()}
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
      ),
    ).toMatchSnapshot();
  });

  it('should match disabled state', () => {
    expect(
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
    ).toMatchSnapshot();
  });
});
