import React from 'react';

import Switch from '../Switch';
import { render, fireEvent } from '@testing-library/react';

describe('Switch', () => {
  it('should set checked attribute', () => {
    const { container } = render(<Switch checked={true} onChange={() => {}} />);
    const input = container.firstElementChild?.firstElementChild;

    expect(input).toBeChecked();
  });
  it('should invoke onChange function', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Switch checked={false} onChange={handleChange} />,
    );
    const label = container.firstElementChild!;
    fireEvent.click(label);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it('should set disabled attribute', () => {
    const { container } = render(
      <Switch checked={false} onChange={() => {}} disabled={true} />,
    );
    const input = container.firstElementChild?.firstElementChild;

    expect(input).toBeDisabled();
  });
});
