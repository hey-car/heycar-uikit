import cx from 'classnames';
import React from 'react';
import Typography from '@heycar-uikit/typography';
import styles from './Pagination.module.scss';

const Ellipsis = () => (
  <div className={cx(styles['pagination-desktop'], styles['pagination-ellipsis'])}>
    <Typography variant="subheading2">...</Typography>
  </div>
);

export default Ellipsis;
