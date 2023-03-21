import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Calculator = createSvgIcon(
  <>
    <path d="M6 16H10" stroke="currentColor" strokeWidth="2" />
    <path d="M14 16H18" stroke="currentColor" strokeWidth="2" />
    <path d="M8 14L8 18" stroke="currentColor" strokeWidth="2" />
    <rect
      fill="transparent"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      width="16"
      x="4"
      y="4"
    />
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" />
    <path d="M12 12L12 21" stroke="currentColor" strokeWidth="2" />
  </>,
  'Calculator',
);
