import React from 'react';

import Switch from '../Switch';
import { render, fireEvent } from '@testing-library/react';

describe('Switch', () => {
  it('should set defaultChecked attribute', () => {
    const { container } = render(<Switch defaultChecked={true} />);
    const input = container.firstElementChild?.firstElementChild;

    expect(input).toBeChecked();
  });
  it('should change checked attribute', () => {
    const { container } = render(<Switch defaultChecked={false} />);
    const label = container.firstElementChild!;
    const input = label.firstElementChild;

    expect(input).not.toBeChecked();

    fireEvent.click(label);

    expect(input).toBeChecked();
  });
  it('should invoke onChange function', () => {
    const handleChange = jest.fn();
    const { container } = render(<Switch onChange={handleChange} />);
    const label = container.firstElementChild!;
    fireEvent.click(label);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
