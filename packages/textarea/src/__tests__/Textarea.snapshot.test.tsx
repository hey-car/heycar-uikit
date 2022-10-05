import React from 'react';
import { render } from '@testing-library/react';

import Textarea from '../Textarea';

describe('Textarea Snapshots tests', () => {
  it('should match callback methods', () => {
    expect(
      render(<Textarea onChange={jest.fn()} value="value" />),
    ).toMatchSnapshot();
  });

  it('should match label and value props', () => {
    expect(render(<Textarea label="Label" value="value" />)).toMatchSnapshot();
  });

  it('should match max length', () => {
    expect(
      render(<Textarea label="Label" maxLength={20} value="value" />),
    ).toMatchSnapshot();
  });

  it('should match disabled state', () => {
    expect(
      render(<Textarea disabled={true} label="Label" value="value" />),
    ).toMatchSnapshot();
  });

  it('should match error state', () => {
    expect(
      render(
        <Textarea
          error="This is the placeholder for error note"
          label="Label"
          value="value"
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match hint text', () => {
    expect(
      render(
        <Textarea
          hint="This is the placeholder for error note"
          label="Label"
          value="value"
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match fullWidth', () => {
    expect(
      render(<Textarea fullWidth={true} label="Label" value="value" />),
    ).toMatchSnapshot();
  });
});
