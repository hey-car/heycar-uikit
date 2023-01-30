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
    const { getByText } = render(
      <Container component="section">hey</Container>,
    );

    expect(getByText('hey').tagName).toBe('SECTION');
  });
});
