import React from 'react';
import { render } from '@testing-library/react';

import Switch from '../Switch';

describe('Switch snapshot', () => {
  it('should match default snapshot', () => {
    expect(render(<Switch />)).toMatchSnapshot();
  });
  it('should match checked snapshot', () => {
    expect(render(<Switch checked/>)).toMatchSnapshot();
  });
});
