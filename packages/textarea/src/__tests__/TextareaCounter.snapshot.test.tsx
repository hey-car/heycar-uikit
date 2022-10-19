import React from 'react';
import { render } from '@testing-library/react';

import TextareaCounter from '../components/TextareaCounter';

const textLength = 20;

describe('TextareaCounter Snapshots tests', () => {
  it('should match base state', () => {
    expect(
      render(
        <TextareaCounter length={textLength / 2} maxLength={textLength} />,
      ),
    ).toMatchSnapshot();
  });

  it('should match error state', () => {
    expect(
      render(
        <TextareaCounter length={textLength * 2} maxLength={textLength} />,
      ),
    ).toMatchSnapshot();
  });
});
