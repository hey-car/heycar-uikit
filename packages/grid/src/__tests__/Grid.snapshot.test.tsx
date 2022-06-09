import React from 'react';
import { render } from '@testing-library/react';

import { Column, Row } from '..';

describe('Grid Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(
      render(
        <Row>
          <Column widths={[6]}>Hello</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Row justify="center">
          <Column widths={[3]}>Hello</Column>
          <Column widths={[3]}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with centered elements', () => {
    expect(
      render(
        <Row justify="center">
          <Column widths={[3]}>Hello</Column>
          <Column widths={[3]}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with vertically centered elements', () => {
    expect(
      render(
        <Row align="center">
          <Column widths={[3]}>Hello</Column>
          <Column widths={[3]}>
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
          <Column widths={[3]}>Hello</Column>
          <Column widths={[3]}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });

  it('should render row with row gap', () => {
    expect(
      render(
        <Row rowGap={8}>
          <Column widths={[12]}>Hello</Column>
          <Column widths={[12]}>World!</Column>
        </Row>,
      ),
    ).toMatchSnapshot();
  });
});
