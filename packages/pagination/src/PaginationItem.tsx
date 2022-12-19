import React from 'react';

export interface OverridableComponent<M extends OverridableTypeMap> {
  // If you make any changes to this interface, please make sure to update the
  // `OverridableComponent` type in `mui-types/index.d.ts` as well.
  // Also, there are types in MUI Base that have a similar shape to this interface
  // (e.g. SelectUnstyledType, OptionUnstyledType, etc.).
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>,
  ): JSX.Element | null;
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = (
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
);

/**
 * Props defined on the component (+ common material-ui props).
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> = M['props'];

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 *
 * @internal
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export interface OverridableTypeMap {
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: {};
  defaultComponent: React.ElementType;
}

//----------------------

export interface PaginationItemTypeMap<
  // eslint-disable-next-line @typescript-eslint/ban-types
  P = {},
  D extends React.ElementType = 'div',
> {
  props: P & {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: string;
  };
  defaultComponent: D;
}

export type PaginationItemProps<
  D extends React.ElementType = PaginationItemTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<PaginationItemTypeMap<P, D>, D>;

const PaginationItem: OverridableComponent<PaginationItemTypeMap> = ({
  classes,
}) => {
  return <div className={classes}></div>;
};

const LinkLucas = ({ test }: { test }) => {
  return <div></div>;
};

const Test = () => {
  return (
    <div>
      <PaginationItem component={LinkLucas} />
    </div>
  );
};
