import React from 'react';
import { render } from '@testing-library/react';

import { Column, Row } from '..';

describe('Grid Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(
      render(
        <Row>
          <Column widths={{ sm: 6 }}>Hello</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Row justify="center">
          <Column widths={{ sm: 3 }}>Hello</Column>
          <Column widths={{ sm: 3 }}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Row justify="center">
          <Column widths={{ sm: 3 }}>Hello</Column>
          <Column widths={{ sm: 3 }}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with vertically centered elements', () => {
    expect(
      render(
        <Row align="center">
          <Column widths={{ sm: 3 }}>Hello</Column>
          <Column widths={{ sm: 3 }}>
            World!<div>Extra text</div>
          </Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with reversed elements', () => {
    expect(
      render(
        <Row reverse={true}>
          <Column widths={{ sm: 3 }}>Hello</Column>
          <Column widths={{ sm: 3 }}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with row gap', () => {
    expect(
      render(
        <Row rowGap={{ sm: 8 }}>
          <Column widths={{ sm: 12 }}>Hello</Column>
          <Column widths={{ sm: 12 }}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with column gap', () => {
    expect(
      render(
        <Row columnGap={{ sm: 8 }}>
          <Column widths={{ sm: 12 }}>Hello</Column>
          <Column widths={{ sm: 12 }}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });
});
