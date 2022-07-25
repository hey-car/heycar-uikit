import React from 'react';

import { BadgeIconProps } from './BadgeIcon.types';

import styles from './badgeicon.module.css';
import stylesVariant from './badgeicon.variant.module.css';

function BadgeIcon({ fontSize = 28, color = 'primary' }: BadgeIconProps) {
  return (
    <svg
      className={styles.icon}
      fill="none"
      style={{ fontSize }}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={stylesVariant[color]}
        clip-rule="evenodd"
        d="M2.15363 16L2.85733 6.5L15.1427 6.5L15.8464 16L2.15363 16ZM13.9753 4.5L17 4.5L17.8519 16L18 18L15.9945 18L2.00548 18L-7.86805e-07 18L0.148149 16L1 4.5L4.02469 4.5C4.27555 1.97334 6.40733 -5.06732e-07 9 -3.93402e-07C11.5927 -2.80073e-07 13.7245 1.97334 13.9753 4.5ZM11.9585 4.5C11.7205 3.08114 10.4865 2 9 2C7.5135 2 6.27952 3.08114 6.04148 4.5L11.9585 4.5Z"
        fill="#303030"
        fill-rule="evenodd"
      />
    </svg>
  );
}

export default BadgeIcon;
