import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Calculator = createSvgIcon(
  <>
    <path d="M6 16H10" stroke="#303030" strokeWidth="2" />
    <path d="M14 16H18" stroke="#303030" strokeWidth="2" />
    <path d="M8 14L8 18" stroke="#303030" strokeWidth="2" />
    <rect
      fill="transparent"
      height="16"
      stroke="#303030"
      strokeWidth="2"
      width="16"
      x="4"
      y="4"
    />
    <path d="M4 12H20" stroke="#303030" strokeWidth="2" />
    <path d="M12 12L12 21" stroke="#303030" strokeWidth="2" />
  </>,
  'Calculator',
);
