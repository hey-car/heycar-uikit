import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const TickCircle = createSvgIcon(
  <>
    <circle
      cx="12"
      cy="12"
      fill="#FDEEEE"
      r="10"
      transform="rotate(90 12 12)"
    />
    <circle cx="12" cy="12" fill="#164CA3" r="10" />
    <path
      d="m6.5 11.5 3.667 3.5L17.5 8"
      fill="none"
      stroke="#fff"
      stroke-width="2"
    />
  </>,
  'TickCircle',
);
