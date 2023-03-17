import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const ReverseSensor = createSvgIcon(
  <>
    <path
      clipRule="evenodd"
      d="M18.157 18.42a13.942 13.942 0 0 0 1.475-6.263c0-2.251-.531-4.378-1.475-6.262L19.947 5a15.933 15.933 0 0 1 1.685 7.157c0 2.573-.607 5.003-1.686 7.157l-1.789-.895Zm-1.79-.895a11.95 11.95 0 0 0 1.265-5.368c0-1.93-.455-3.753-1.264-5.368l-1.79.895a9.958 9.958 0 0 1 1.054 4.473c0 1.608-.38 3.127-1.053 4.473l1.789.895Zm-3.578-1.79a7.966 7.966 0 0 0 .843-3.578 7.966 7.966 0 0 0-.843-3.579L11 9.473c.405.808.632 1.72.632 2.684 0 .965-.227 1.876-.632 2.684l1.79.895Z"
      fill="#303030"
      fillRule="evenodd"
    />
    <circle
      cx="6"
      cy="12"
      fill="transparent"
      r="3"
      stroke="#303030"
      strokeWidth="2"
    />
  </>,
  'ReverseSensor',
);
