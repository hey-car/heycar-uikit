import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

const pangram = 'The quick brown fox jumps over the lazy dog.';

describe('Typography Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Typography>{pangram}</Typography>)).toMatchSnapshot();
  });

  it('should render h1 variant', () => {
    expect(
      render(<Typography variant="h1">{pangram}</Typography>),
    ).toMatchSnapshot();
  });

  it('should render custom tag', () => {
    expect(
      render(
        <Typography Component="div" variant="h1">
          {pangram}
        </Typography>,
      ),
    ).toMatchSnapshot();
  });
});
