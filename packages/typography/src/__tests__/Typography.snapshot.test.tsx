import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

describe('Typography Snapshots tests', () => {
  it('should render variant h.1', () => {
    expect(
      render(<Typography variant="h.1">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant body.1', () => {
    expect(
      render(<Typography variant="body.1">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render highlighted', () => {
    expect(
      render(
        <Typography highlighted={true} variant="body.5">
          Typography
        </Typography>,
      ),
    ).toMatchSnapshot();
  });
});
