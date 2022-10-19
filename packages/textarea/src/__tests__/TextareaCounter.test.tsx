import React from 'react';
import { render } from '@testing-library/react';

import TextareaCounter from '../components/TextareaCounter';

const mainLength = 10;
const maxLength = 20;

describe('TextareaCounter', () => {
  it('should set length/max length in document', () => {
    const { getByText } = render(
      <TextareaCounter length={mainLength} maxLength={maxLength} />,
    );

    expect(getByText(`${mainLength}`)).toBeInTheDocument();
    expect(getByText(`/${maxLength}`)).toBeInTheDocument();
  });

  it('should set error state', () => {
    const count = mainLength * 3;
    const { getByText } = render(
      <TextareaCounter length={count} maxLength={maxLength} />,
    );

    expect(getByText(`${count}`)).toHaveClass('countLengthError');
  });
});
