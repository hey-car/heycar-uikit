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
});
