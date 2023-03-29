import React, { useMemo } from 'react';
import cn from 'classnames';

import { PropsBasedOnComponent } from '../../../../shared/types/PropsBasedOnComponent';
import getGridClassNames from '../utils/getGridClassNames';

import { ColProps } from './Col.types';

import guttersStyles from '../styles/gutters.module.css';
import styles from './Col.module.css';

// export Col is necessary with PropsBasedOnComponent due to a Storybook bug
export const Col: PropsBasedOnComponent<ColProps, 'div'> = ({
  component,
  className,
  align,
  order,
  offset,
  width,
  children,
  dataTestId,
}) => {
  const Component = component ?? 'div';

  const gridClassNames = useMemo(
    () => getGridClassNames({ order, offset, width }, styles),
    [order, offset, width],
  );

  const classNames = cn(
    guttersStyles.col,
    styles.component,
    align && styles[`align-${align}`],
    ...gridClassNames,
    className,
  );

  return (
    <Component className={classNames} data-test-id={dataTestId}>
      {children}
    </Component>
  );
};

export default Col;
