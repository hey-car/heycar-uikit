import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

describe('Typography Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Typography>Typography</Typography>)).toMatchSnapshot();
  });

  it('should render variant primary', () => {
    expect(
      render(<Typography variant="primary">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render size middle', () => {
    expect(
      render(<Typography size="middle">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render size small', () => {
    expect(
      render(<Typography size="small">Typography</Typography>),
    ).toMatchSnapshot();
  });
});
