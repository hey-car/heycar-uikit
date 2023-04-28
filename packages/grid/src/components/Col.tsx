import React, { useMemo } from 'react';

import getGridClassNames from '../utils/getGridClassNames';

import { ColProps } from './Col.types';

import guttersStyles from '../styles/gutters.module.css';
import styles from './Col.module.css';

function Col<E extends React.ElementType = 'div'>({
  component,
  className,
  align,
  order,
  offset,
  width,
  children,
  dataTestId,
}: ColProps<E>) {
  const Component = component ?? 'div';

  const gridClassNames = useMemo(
    () => getGridClassNames({ order, offset, width }, styles),
    [order, offset, width],
  );

  const classNames = `${guttersStyles.col} ${styles.component} ${
    align ? styles[`align-${align}`] : ''
  } ${gridClassNames.join(' ')} ${className || ''}`;

  return (
    <Component className={classNames} data-test-id={dataTestId}>
      {children}
    </Component>
  );
}

export default Col;
