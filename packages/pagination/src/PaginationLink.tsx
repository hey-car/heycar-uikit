import React from 'react';
import cx from 'classnames';
import styles from './styles/default.module.css';

interface Props {
  href: string;
  className?: string;
  isDisabled?: boolean;
}

const PaginationLink: React.FC<Props> = ({ href, children, className, isDisabled }) =>
  isDisabled ? (
    <div className={cx(styles['pagination-item'], isDisabled && styles['pagination-item-disabled'], className)}>
      {children}
    </div>
  ) : (
    <a
      href={href}
      className={cx(styles['pagination-item'], isDisabled && styles['pagination-item-disabled'], className)}
    >
      {children}
    </a>
  );

export default PaginationLink;

PaginationLink.defaultProps = {
  className: undefined,
  isDisabled: false,
};
