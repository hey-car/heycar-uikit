import React from 'react';

import { DropdownOptionProps } from './Dropdown.types';

import styles from './styles/option.module.css';

function DropdownOption({
  leftContent,
  label,
  rightContent,
  ...restProps
}: DropdownOptionProps) {
  return (
    <div {...restProps} className={styles.contentContainer}>
      {leftContent && <span className={styles.leftContent}>{leftContent}</span>}
      <span className={styles.optionContent}>{label}</span>
      {rightContent && (
        <span className={styles.rightContent}>{rightContent}</span>
      )}
    </div>
  );
}

export default DropdownOption;
