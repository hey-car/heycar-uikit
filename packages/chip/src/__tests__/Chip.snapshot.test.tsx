import React from 'react';
import { render } from '@testing-library/react';

import Chip from '../Chip';

const defaultChild = 'text';

describe('Chip Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Chip>{defaultChild}</Chip>)).toMatchSnapshot();
  });

  it('should render variant="choice"', () => {
    expect(
      render(<Chip variant="choice">{defaultChild}</Chip>),
    ).toMatchSnapshot();
  });

  it('should render variant="filter"', () => {
    expect(
      render(<Chip variant="filter">{defaultChild}</Chip>),
    ).toMatchSnapshot();
  });

  it('should render disabled="true"', () => {
    expect(
      render(<Chip disabled={true}>{defaultChild}</Chip>),
    ).toMatchSnapshot();
  });

  it('should render selected="true"', () => {
    expect(
      render(<Chip selected={true}>{defaultChild}</Chip>),
    ).toMatchSnapshot();
  });

  it('should render Component="span"', () => {
    expect(
      render(<Chip Component="span">{defaultChild}</Chip>),
    ).toMatchSnapshot();
  });

  it('should render text', () => {
    expect(render(<Chip>{defaultChild}</Chip>)).toMatchSnapshot();
  });
});
