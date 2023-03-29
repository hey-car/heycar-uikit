import React from 'react';

/**
 * `PropsBasedOnComponent` - This interface inherits props from a designated Component
 */
export interface PropsBasedOnComponent<
  ComponentBaseProps,
  DefaultElement extends React.ElementType,
> {
  <Component extends React.ElementType = DefaultElement>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component?: Component;
    } & ComponentBaseProps &
      Omit<React.ComponentPropsWithoutRef<Component>, keyof ComponentBaseProps>,
  ): JSX.Element | null;
}
