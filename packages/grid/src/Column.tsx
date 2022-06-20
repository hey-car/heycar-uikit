import React, { useMemo } from 'react';
import cn from 'classnames';

import { getClassesAccordingToBreakpoint } from './utils/getClassesAccordingToBreakpoint';
import { ColumnProps } from './Column.types';

import styles from './styles/column.module.css';

function Column({
  Component = 'div',
  children,
  widths,
  className,
  offset,
  order,
}: ColumnProps): JSX.Element {
  const widthClasses = useMemo(
    () => getClassesAccordingToBreakpoint(widths, styles),
    [widths],
  );
  const offsetClasses = useMemo(() => {
    if (offset) {
      return getClassesAccordingToBreakpoint(offset, styles, 'offset');
    }

    return [];
  }, [offset]);
  const orderClasses = useMemo(() => {
    if (order) {
      return getClassesAccordingToBreakpoint(order, styles, 'order');
    }

    return [];
  }, [order]);

  const classNames = cn(
    styles.column,
    ...widthClasses,
    ...offsetClasses,
    ...orderClasses,
    className,
  );

  return <Component className={classNames}>{children}</Component>;
}

export default Column;
