import React from 'react';

import styles from '../styles/icon.module.css';

interface CloseIconProps {
  /**
   * 	boolean to make chip disable.
   */
  disabled?: boolean;
}

function CloseIcon({ disabled = false }: CloseIconProps) {
  return (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={disabled ? styles.disabled : styles.active}
        clip-rule="evenodd"
        d="M8.9428 7.99999L13.8047 3.13806L12.8619 2.19525L7.99999 7.05718L3.13806 2.19525L2.19525 3.13806L7.05718 7.99999L2.19525 12.8619L3.13806 13.8047L7.99999 8.9428L12.8619 13.8047L13.8047 12.8619L8.9428 7.99999Z"
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default CloseIcon;
