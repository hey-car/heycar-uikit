import React from 'react';
import { render } from '@testing-library/react';

import Badge from '../Badge';

const defaultChild = '$100 off';

describe('Badge Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Badge>{defaultChild}</Badge>)).toMatchSnapshot();
  });

  it('should render color="primary"', () => {
    expect(
      render(<Badge color="primary">{defaultChild}</Badge>),
    ).toMatchSnapshot();
  });

  it('should render color="secondary"', () => {
    expect(
      render(<Badge color="secondary">{defaultChild}</Badge>),
    ).toMatchSnapshot();
  });

  it('should render color="tertiary"', () => {
    expect(
      render(<Badge color="tertiary">{defaultChild}</Badge>),
    ).toMatchSnapshot();
  });

  it('should render color="warning"', () => {
    expect(
      render(<Badge color="warning">{defaultChild}</Badge>),
    ).toMatchSnapshot();
  });

  it('should render color="highlight"', () => {
    expect(
      render(<Badge color="highlight">{defaultChild}</Badge>),
    ).toMatchSnapshot();
  });

  it('should render text', () => {
    expect(render(<Badge>{defaultChild}</Badge>)).toMatchSnapshot();
  });
});
