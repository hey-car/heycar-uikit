import React from 'react';
import { render } from '@testing-library/react';

import { ABSport as Icon } from '../paths/ABSport';

describe('Button Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Icon />)).toMatchSnapshot();
  });

  it('should render color="primary"', () => {
    expect(render(<Icon color="primary" />)).toMatchSnapshot();
  });

  it('should render viewBox style', () => {
    expect(render(<Icon fontSize={90} />)).toMatchSnapshot();
  });

  it('should render custom viewBox', () => {
    expect(render(<Icon viewBox="0 0 90 90" />)).toMatchSnapshot();
  });

  it('should render titleAccess & svg title', () => {
    expect(render(<Icon titleAccess="title" />)).toMatchSnapshot();
  });
});
