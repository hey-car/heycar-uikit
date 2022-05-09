import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Button>Button</Button>)).toMatchSnapshot();
  });

  it('should render variant primary', () => {
    expect(render(<Button variant="primary">Button</Button>)).toMatchSnapshot();
  });

  it('should render size middle', () => {
    expect(render(<Button size="middle">Button</Button>)).toMatchSnapshot();
  });

  it('should render size small', () => {
    expect(render(<Button size="small">Button</Button>)).toMatchSnapshot();
  });
});
