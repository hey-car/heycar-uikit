import React, { InputHTMLAttributes, MouseEvent, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: string;
  type?: 'number' | 'card' | 'email' | 'money' | 'password' | 'tel' | 'text';
  defaultValue?: string;
  fullWidth?: boolean;
  error?: ReactNode | boolean;
  hint?: ReactNode;
  label?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightAddons?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    payload: { value: string },
  ) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (event: MouseEvent<HTMLDivElement>) => void;
  dataTestId?: string;
};
