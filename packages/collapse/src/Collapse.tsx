import React from 'react';
import cn from 'classnames';

import useCollapse from './hooks/useCollapse';
import { CollapseProps } from './Collapse.types';

import styles from './styles/default.module.css';

function Collapse({
  children,
  open = false,
  className,
  dataTestId,
  ...restProps
}: CollapseProps) {
  const { collapseContent, collapseStyles, handlerTransitionEnd } =
    useCollapse(open);
  const classNames = cn(styles.collapse, className);

  return (
    <div
      className={classNames}
      data-test-id={dataTestId}
      onTransitionEnd={handlerTransitionEnd}
      ref={collapseContent}
      style={collapseStyles}
      {...restProps}
    >
      {children}
    </div>
  );
}

Collapse.displayName = 'Collapse';

export default Collapse;
