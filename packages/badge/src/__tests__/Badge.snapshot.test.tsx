import React from 'react';
import { render } from '@testing-library/react';

import Badge from '../Badge';

describe('Badge Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Badge>$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render color="primary"', () => {
    expect(render(<Badge color="primary">$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render color="secondary"', () => {
    expect(render(<Badge color="secondary">$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render color="tertiary"', () => {
    expect(render(<Badge color="tertiary">$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render color="warning"', () => {
    expect(render(<Badge color="warning">$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render color="highlight"', () => {
    expect(render(<Badge color="highlight">$100 off</Badge>)).toMatchSnapshot();
  });

  it('should render text', () => {
    expect(render(<Badge>$100 off</Badge>)).toMatchSnapshot();
  });
});
