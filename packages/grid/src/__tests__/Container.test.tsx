import React from 'react';
import { render } from '@testing-library/react';

import Container from '../components/Container';

describe('Grid.Container', () => {
  describe('Snapshots tests', () => {
    it('should match snapshot', () => {
      const { container } = render(<Container>content</Container>);

      expect(container).toMatchSnapshot();
    });
  });

  it('should set tag correctly', () => {
    const dataTestId = 'test-id';
    const { getByTestId } = render(
      <Container as="section" dataTestId={dataTestId} />,
    );

    expect(getByTestId(dataTestId).tagName).toBe('SECTION');
  });
});
