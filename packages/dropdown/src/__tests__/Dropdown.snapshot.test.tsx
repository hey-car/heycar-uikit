import React from 'react';
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown';

describe('Dropdown Snapshots tests', () => {
  it('should match callback methods', () => {
    expect(
      render(
        <Dropdown
          id="marque"
          label="Marque label"
          labelFor="marque"
          onChange={jest.fn()}
        >
          <option value="Marque">Marque</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </Dropdown>,
      ),
    ).toMatchSnapshot();
  });

  it('should match label props', () => {
    expect(render(<Dropdown label="Label" />)).toMatchSnapshot();
  });

  it('should match disabled state', () => {
    expect(
      render(<Dropdown disabled={true} label="Label" />),
    ).toMatchSnapshot();
  });

  it('should match error hint/state', () => {
    expect(
      render(
        <Dropdown
          error="This is the placeholder for error note"
          label="Label"
        />,
      ),
    ).toMatchSnapshot();
  });
});
