import React from 'react';
import { render } from '@testing-library/react';

import { PaginationItem } from '@heycar-uikit/pagination';

import Pagination from '../Pagination';

describe('Pagination Snapshots tests', () => {
  it('should match basic snapshot', () => {
    expect(
      render(<Pagination currentPage={5} totalPages={10} />),
    ).toMatchSnapshot();

    expect(
      render(<Pagination currentPage={1} totalPages={10} />),
    ).toMatchSnapshot();

    expect(
      render(<Pagination currentPage={10} totalPages={10} />),
    ).toMatchSnapshot();
  });

  it('should match snapshots of custom render functions', () => {
    expect(
      render(
        <Pagination
          currentPage={10}
          renderItem={item => (
            <PaginationItem href={`this is href ${item.page}`} {...item} />
          )}
          totalPages={10}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should match snapshot of custom component', () => {
    const MyLink: React.FC<{ link: string }> = ({
      link,
      children,
      ...rest
    }) => {
      return (
        <a href={link} {...rest}>
          {children}
        </a>
      );
    };

    expect(
      render(
        <Pagination
          currentPage={5}
          renderItem={item => (
            <PaginationItem
              component={MyLink}
              link={'page ' + item.page}
              {...item}
            />
          )}
          totalPages={10}
        />,
      ),
    );
  });
});
