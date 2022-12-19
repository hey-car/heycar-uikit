import React from 'react';
import cx from 'classnames';
import Typography from '@heycar-uikit/typography';
import PaginationLink from './PaginationLink';
import styles from './styles/default.module.css';

interface Props {
  href: string;
  pageNumber: number;
  isCurrentPage: boolean;
  className?: string;
}

const PaginationNumber: React.FC<Props> = ({ className, href, pageNumber, isCurrentPage }) => (
  <PaginationLink
    href={href}
    className={cx(className, styles['pagination-page_number'], isCurrentPage && styles['pagination-item-current_item'])}
  >
    <Typography variant="subheading2">{pageNumber}</Typography>
  </PaginationLink>
);

export default PaginationNumber;

PaginationNumber.defaultProps = {
  className: undefined,
};
