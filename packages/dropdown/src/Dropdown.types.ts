import React from 'react';

export type SelectOptions = {
  label: string;
  value: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type DropdownProps = {
  options: SelectOptions[];
  onChange: (value: SelectOptions | undefined) => void;
  value?: SelectOptions;
};
