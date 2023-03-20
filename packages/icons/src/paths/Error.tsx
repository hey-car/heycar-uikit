import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Error = createSvgIcon(
  <>
    <circle cx="12" cy="12" fill="#EB5757" r="10" />
    <path
      clipRule="evenodd"
      d="m12 13.414 3.535 3.536 1.415-1.414L13.414 12l3.536-3.535-1.414-1.415L12 10.586 8.464 7.05 7.05 8.465 10.586 12 7.05 15.536l1.414 1.414L12 13.414Z"
      fill="#fff"
      fillRule="evenodd"
    />
  </>,
  'Error',
);
