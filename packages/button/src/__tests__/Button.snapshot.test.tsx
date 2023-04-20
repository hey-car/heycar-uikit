import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Button />)).toMatchSnapshot();
  });

  it('should render left addons', () => {
    expect(render(<Button leftIcon="🚗" />)).toMatchSnapshot();
  });

  it('should render right addons', () => {
    expect(render(<Button rightIcon="🚗" />)).toMatchSnapshot();
  });

  it('should render primary color', () => {
    expect(render(<Button color="primary" />)).toMatchSnapshot();
  });

  it('should render tertiary color', () => {
    expect(render(<Button color="tertiary" />)).toMatchSnapshot();
  });

  it('should render whatsapp color', () => {
    expect(
      render(<Button children="WhatsApp" color="whatsapp" />),
    ).toMatchSnapshot();
  });

  it('should render button by default', () => {
    expect(render(<Button />)).toMatchSnapshot();
  });

  it('should render anchor if href pass', () => {
    expect(render(<Button href="https://someurl.com" />)).toMatchSnapshot();
  });

  it('should render loader if loading pass', () => {
    expect(render(<Button loading={true} />)).toMatchSnapshot();
  });

  it('should render loader if loading & href pass', () => {
    expect(
      render(<Button href="https://someurl.com" loading={true} />),
    ).toMatchSnapshot();
  });
});
