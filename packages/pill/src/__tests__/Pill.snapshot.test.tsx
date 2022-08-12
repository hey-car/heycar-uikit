import React from 'react';
import { render } from '@testing-library/react';

import Pill from '../Pill';

const defaultChild = '$100 off';

describe('Pill Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Pill>{defaultChild}</Pill>)).toMatchSnapshot();
  });

  it('should render text', () => {
    expect(render(<Pill>{defaultChild}</Pill>)).toMatchSnapshot();
  });
});
