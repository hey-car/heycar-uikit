import React from 'react';
import { render } from '@testing-library/react';

import Switch from '../Switch';

describe('Switch snapshot', () => {
  it('should match default snapshot', () => {
    expect(
      render(<Switch checked={false} onChange={() => {}} />),
    ).toMatchSnapshot();
  });
  it('should match checked snapshot', () => {
    expect(
      render(<Switch checked={true} onChange={() => {}} />),
    ).toMatchSnapshot();
  });
});
