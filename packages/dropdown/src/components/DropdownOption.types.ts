import React from 'react';

export type DropdownOptionProps = {
  /**
   * labels of options
   */
  label: string;
  /**
   * value of options
   */
  value: string | number;
  /**
   * Element placed before the children.
   */
  leftContent?: React.ReactNode;
  /**
   * Element placed after the children
   */
  rightContent?: React.ReactNode;
};
