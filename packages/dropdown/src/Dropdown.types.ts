import React from 'react';

export interface DropdownProps {
  /**
   * Function that will be called every time the Select value is selected/changed.
   */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Additional `class` names to be added
   */
  className?: string;
  /**
   * Controls if the select is disabled
   */
  disabled?: boolean;
  /**
   * Adds label to the dropdown
   */
  label?: string;
  /**
   * Adds labelFor to the dropdown
   */
  labelFor?: string;
  /**
   * Id of select
   */
  id?: string;
  /**
   * name of select
   */
  name?: string;
  /**
   * Options in select list
   */
  children?: React.ReactNode;
  /**
   * The value of the component.
   */
  value?: string;
  /**
   * validation message of the component.
   */
  error?: string;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
