import React from 'react';
import cn from 'classnames';

// import Collapse from '@heycar-uikit/collapse';
import { AccordionProps } from './Accordion.types';

import styles from './styles/default.module.css';

const Accordion = React.forwardRef<HTMLElement, AccordionProps>(
  (
    {
      children,
      title,
      open,
      Component = 'div',
      dataTestId,
      className,
      ...restProps
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(open);
    const classNames = cn(styles.accordion, className);
    const handleHeaderClick = () => setIsOpen(!isOpen);

    return (
      <Component
        className={classNames}
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        <div className={styles.accordionHeader} onClick={handleHeaderClick}>
          {title}
        </div>
        {/* <Collapse open={isOpen}>{children}</Collapse> */}
      </Component>
    );
  },
);

Accordion.displayName = 'Accordion';

export default Accordion;
