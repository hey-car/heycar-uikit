import React from 'react';
import cn from 'classnames';

import { RowProps } from './Row.types';

import styles from '../../styles/row.module.css';

function Row({
  Component = 'div',
  children,
  className,
  justify = 'start',
  align = 'stretch',
  reverse,
}: RowProps): JSX.Element {
  const classNames = cn(
    styles.row,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    className,
    { [styles.reverse]: !!reverse },
  );

  return <Component className={classNames}>{children}</Component>;
}

export default Row;
