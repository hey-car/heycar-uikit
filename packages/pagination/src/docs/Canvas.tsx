import React from 'react';

import { Pagination } from '../Pagination';
import { PaginationItem } from '../PaginationItem';

import Link from './Link';

export const PaginationCanvas = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <Pagination
        aria-label={'laaaabel'}
        currentPage={8}
        renderItem={item => (
          <PaginationItem
            component={Link}
            link={`this is a link number ${item.page}`}
            {...item}
          />
        )}
        totalPages={10}
      />
      <Pagination
        currentPage={1}
        renderItem={item => (
          <PaginationItem
            href={`this is a href number ${item.page}`}
            {...item}
          />
        )}
        totalPages={10}
      />
      <Pagination
        currentPage={5}
        renderItem={item => <PaginationItem {...item} />}
        totalPages={10}
      />
      <Pagination
        currentPage={3}
        getItemAriaLabel={({ type, page, selected }) => {
          // console.log({ type, page, selected });

          return 'Test: Go to Page ' + page;
        }}
        onClick={itemNumber => console.log({ lol: 'ues', itemNumber })}
        totalPages={3}
      />
      <Pagination
        aria-label={'laaaabel'}
        currentPage={8}
        renderItem={item => <PaginationItem component={'a'} {...item} />}
        totalPages={10}
      />
    </div>
  );
};
