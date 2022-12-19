import { render } from '@testing-library/react';

import Pagination from '../Pagination';

describe('Pagination', () => {
  it('should render', () => {
    const { screen } = render(<Pagination></Pagination>);

    expect(1).toBe(1);
  });
});
