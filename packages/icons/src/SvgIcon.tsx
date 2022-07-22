import React from 'react';
import cn from 'classnames';

import { SvgIconProps } from './SvgIcon.types';

import styles from './SvgIcon.module.css';

const SvgIcon = React.forwardRef<HTMLOrSVGElement, SvgIconProps>(
  (
    {
      children,
      Component = 'svg',
      fontSize = 24,
      className,
      titleAccess,
      viewBox = '0 0 24 24',
      color = 'inherit',
      dataTestId,
      ...restProps
    },
    ref,
  ) => {
    const classNames = cn(styles.svgIcon, styles[color], className);
    const role = titleAccess ? 'img' : undefined;
    const ariaHidden = titleAccess ? 'false' : undefined;
    const ariaLabel = titleAccess ? titleAccess : undefined;
    const inlineStyles = { ...restProps.style, fontSize };

    return (
      <Component
        aria-hidden={ariaHidden}
        {...restProps}
        aria-label={ariaLabel}
        className={classNames}
        data-test-id={dataTestId}
        focusable="false"
        ref={ref}
        role={role}
        style={inlineStyles}
        viewBox={viewBox}
      >
        {children}
        {titleAccess ? <title>{titleAccess}</title> : null}
      </Component>
    );
  },
);

export default SvgIcon;
