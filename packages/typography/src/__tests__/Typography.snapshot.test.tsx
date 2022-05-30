import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

describe('Typography Snapshots tests', () => {
  it('should render variant display', () => {
    expect(
      render(<Typography variant="display.1">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant heading', () => {
    expect(
      render(<Typography variant="h.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="h.2">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="h.3">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="h.4">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="h.5">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="h.6">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant subheading', () => {
    expect(
      render(<Typography variant="sh.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="sh.2">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="sh.3">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant body', () => {
    expect(
      render(<Typography variant="body.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="body.2">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="body.3">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="body.4">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="body.5">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="body.6">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant caption', () => {
    expect(
      render(<Typography variant="caption.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="caption.2">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="caption.3">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="caption.4">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="caption.5">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant overline', () => {
    expect(
      render(<Typography variant="overline.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="overline.2">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render variant button', () => {
    expect(
      render(<Typography variant="button.1">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="button.2">Typography</Typography>),
    ).toMatchSnapshot();
    expect(
      render(<Typography variant="button.3">Typography</Typography>),
    ).toMatchSnapshot();
  });

  it('should render highlighted', () => {
    expect(
      render(
        <Typography highlighted={true} variant="body.5">
          Typography
        </Typography>,
      ),
    ).toMatchSnapshot();
  });
});
