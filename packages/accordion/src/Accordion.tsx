import React from 'react';
import cn from 'classnames';

import Collapse from '@heycar-uikit/collapse';
import { ChevronDown } from '@heycar-uikit/icons';

import { AccordionProps } from './Accordion.types';

import styles from './styles/default.module.css';

const Accordion = React.forwardRef<HTMLElement, AccordionProps>(
  (
    {
      children,
      title,
      open = false,
      Component = 'div',
      disabled = false,
      dataTestId,
      className,
      onExpandedChange,
      onTransitionEnd,
      ...restProps
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(open);
    const classNames = cn(
      styles.accordion,
      {
        [styles.accordionOpen]: isOpen,
      },
      className,
    );
    const headerClassNames = cn(styles.header, {
      [styles.headerOpen]: isOpen,
      [styles.headerDisabled]: disabled,
    });
    //const accordionId = `collapsible-${Date.now()}`;
    const handleHeaderButtonChange = (
      event:
        | React.MouseEvent<HTMLElement>
        | React.KeyboardEvent<HTMLDivElement>,
    ) => {
      if (disabled) return event.preventDefault();

      setIsOpen(!isOpen);
      if (onExpandedChange) {
        onExpandedChange(!isOpen);
      }
    };
    const tabIndex = disabled ? -1 : 0;

    return (
      <Component
        className={classNames}
        data-accordion-component="Accordion"
        data-test-id={dataTestId}
        ref={ref}
        {...restProps}
      >
        <div
          // aria-controls={accordionId}
          aria-expanded={isOpen}
          className={headerClassNames}
          data-accordion-component="AccordionItemButton"
          onClick={handleHeaderButtonChange}
          onKeyPress={handleHeaderButtonChange}
          role="button"
          tabIndex={tabIndex}
        >
          {title}
          <div className={styles.headerArrow}>
            <ChevronDown aria-hidden="true" color="inherit" />
          </div>
        </div>
        <Collapse
          // aria-labelledby={accordionId}
          className={styles.body}
          onTransitionEnd={onTransitionEnd}
          role="region"
          data-accordion-component="AccordionItemPanel"
          // id={accordionId}
          open={isOpen}
        >
          {children}
        </Collapse>
      </Component>
    );
  },
);

export default Accordion;
