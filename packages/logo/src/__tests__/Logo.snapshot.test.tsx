import React from 'react';
import { render } from '@testing-library/react';

import Logo from '../Logo';

describe('Logo Snapshots tests', () => {
  it('should match snapshot with primary logo', () => {
    expect(render(<Logo color="primary" fontSize={100} />)).toMatchSnapshot();
  });

  it('should match snapshot with secondary logo', () => {
    expect(render(<Logo color="secondary" fontSize={100} />)).toMatchSnapshot();
  });

  it('should match snapshot with tertiary logo', () => {
    expect(render(<Logo color="tertiary" fontSize={100} />)).toMatchSnapshot();
  });
});
