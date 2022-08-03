import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const PlusCircle = createSvgIcon(
  <React.Fragment>
    <circle cx="12" cy="12" r="10" transform="rotate(90 12 12)" />
    <path d="M13 13H18V11H13V6L11 6V11H6V13H11V18H13V13Z" fill="#fff" />
  </React.Fragment>,
  'PlusCircle',
);
