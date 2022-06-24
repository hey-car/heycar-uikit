import React, { useMemo } from 'react';
import cn from 'classnames';

import { getClassesAccordingToBreakpoint } from './utils/getClassesAccordingToBreakpoint';
import { RowProps } from './Row.types';

import styles from './styles/row.module.css';

function Row({
  Component = 'div',
  children,
  className,
  justify = 'start',
  align = 'stretch',
  reverse,
  rowGap = { sm: 0 },
  columnGap = { sm: 0 },
}: RowProps): JSX.Element {
  const columnGapClasses = useMemo(
    () => getClassesAccordingToBreakpoint(columnGap, styles, 'column-gap'),
    [columnGap],
  );
  const rowGapClasses = useMemo(
    () => getClassesAccordingToBreakpoint(rowGap, styles, 'row-gap'),
    [rowGap],
  );

  const classNames = cn(
    styles.row,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    ...columnGapClasses,
    ...rowGapClasses,
    className,
    { [styles.reverse]: !!reverse },
  );

  return (
    <Component className={classNames}>
      {React.Children.map(children, child => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return React.cloneElement(child, { columnGap });
      })}
    </Component>
  );
}

export default Row;
