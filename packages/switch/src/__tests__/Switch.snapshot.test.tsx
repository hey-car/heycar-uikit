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
  it('should match checked disabled snapshot', () => {
    expect(
      render(<Switch checked={true} onChange={() => {}} disabled={true} />),
    ).toMatchSnapshot();
  });
  it('should match unchecked disabled snapshot', () => {
    expect(
      render(<Switch checked={false} onChange={() => {}} disabled={true} />),
    ).toMatchSnapshot();
  });
});
