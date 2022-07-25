import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const TickCircle = createSvgIcon(
  <React.Fragment>
    <circle cx="12" cy="12" fill="#fff" r="10" />
    <circle cx="11.9999" cy="12.0008" r="10" />
    <path
      d="M18.8874 9.56436L10.8636 17.2235L6.50647 13.0644L7.88742 11.6176L10.8636 14.4586L17.5065 8.11765L18.8874 9.56436Z"
      fill="#fff"
    />
  </React.Fragment>,
  'TickCircle',
);
