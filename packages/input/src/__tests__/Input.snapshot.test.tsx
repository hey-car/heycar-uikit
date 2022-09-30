import React from 'react';
import { render } from '@testing-library/react';

import Input from '../Input';

describe('Input Snapshots tests', () => {
  it('should match callback methods', () => {
    expect(
      render(
        <Input
          onChange={jest.fn()}
          onClick={jest.fn()}
          onMouseDown={jest.fn()}
          onMouseUp={jest.fn()}
          value="value"
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match label and value props', () => {
    expect(render(<Input label="Label" value="value" />)).toMatchSnapshot();
  });

  it('should match left and right icons', () => {
    expect(
      render(
        <Input label="Label" leftIcon="🚗" rightIcon="🚗" value="value" />,
      ),
    ).toMatchSnapshot();
  });

  it('should match disabled state', () => {
    expect(
      render(<Input disabled={true} label="Label" value="value" />),
    ).toMatchSnapshot();
  });

  it('should match error hint/state', () => {
    expect(
      render(
        <Input
          error="This is the placeholder for error note"
          label="Label"
          value="value"
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match error hint', () => {
    expect(
      render(
        <Input
          hint="This is the placeholder for error note"
          label="Label"
          value="value"
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match fullWidth', () => {
    expect(
      render(<Input fullWidth={true} label="Label" value="value" />),
    ).toMatchSnapshot();
  });
});
