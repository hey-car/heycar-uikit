import React from 'react';
import { render } from '@testing-library/react';

import { ABSport as Icon } from '../../../icons/src/paths/ABSport';
import Pill from '../Pill';

const defaultChild = '$100 off';
const dataTestId = 'testId';
const testComponent = 'span';

describe('Pill Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Pill>{defaultChild}</Pill>)).toMatchSnapshot();
  });

  it('should match data-test-id', () => {
    expect(
      render(<Pill dataTestId={dataTestId}>{defaultChild}</Pill>),
    ).toMatchSnapshot();
  });

  it('should match passed Component', () => {
    expect(
      render(<Pill Component={testComponent}>{defaultChild}</Pill>),
    ).toMatchSnapshot();
  });

  it('should match leftIcon', () => {
    expect(
      render(<Pill leftIcon={<Icon />}>{defaultChild}</Pill>),
    ).toMatchSnapshot();
  });
});
