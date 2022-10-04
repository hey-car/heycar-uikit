import React, { useMemo } from 'react';
import cn from 'classnames';

import getGridClassNames from '../utils/getGridClassNames';

import { RowProps } from './Row.types';

import guttersStyles from '../styles/gutters.module.css';
import styles from './Row.module.css';

function Row({
  Component = 'div',
  className,
  gutter = {
    mobile: 8,
    tablet: { s: 12, l: 16 },
    desktop: {
      s: 16,
      m: 16,
      l: 24,
    },
  },
  align,
  justify = 'between',
  children,
  dataTestId,
}: RowProps) {
  const gridClassNames = useMemo(
    () => getGridClassNames({ gutter }, guttersStyles),
    [gutter],
  );
  const classNames = cn(
    guttersStyles.row,
    styles.component,
    align && styles[align],
    styles[justify],
    ...gridClassNames,
    className,
  );

  return (
    <Component className={classNames} data-test-id={dataTestId}>
      {children}
    </Component>
  );
}

export default Row;
