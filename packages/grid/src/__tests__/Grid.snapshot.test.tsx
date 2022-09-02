import React from 'react';
import { render } from '@testing-library/react';

import Grid from '../Grid';

describe('Grid Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(
      render(
        <Grid.Row>
          <Grid.Col
            width={{
              mobile: 12,
            }}
          >
            Hello
          </Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Grid.Row justify="center">
          <Grid.Col width={{ desktop: { m: 12 } }}>Hello</Grid.Col>
          <Grid.Col width={{ desktop: { m: 6 } }}>World!</Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Grid.Row justify="center">
          <Grid.Col width={{ mobile: 12 }}>Hello</Grid.Col>
          <Grid.Col width={{ mobile: 3 }}>World!</Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with vertically centered elements', () => {
    expect(
      render(
        <Grid.Row align="middle">
          <Grid.Col width={{ mobile: 12 }}>Hello</Grid.Col>
          <Grid.Col width={{ mobile: 3 }}>
            World!<div>Extra text</div>
          </Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with row gap', () => {
    expect(
      render(
        <Grid.Row gutter={{ mobile: 8 }}>
          <Grid.Col width={{ mobile: 12 }}>Hello</Grid.Col>
          <Grid.Col width={{ mobile: 3 }}>World!</Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with Grid.Col gap', () => {
    expect(
      render(
        <Grid.Row gutter={{ mobile: 12 }}>
          <Grid.Col width={{ mobile: 12 }}>Hello</Grid.Col>
          <Grid.Col width={{ mobile: 3 }}>World!</Grid.Col>
        </Grid.Row>,
      ),
    ).toMatchSnapshot();
  });
});
