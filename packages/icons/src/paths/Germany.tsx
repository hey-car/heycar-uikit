import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Germany = createSvgIcon(
  <>
    <g clip-path="url(#a)">
      <path d="M0 5.333h20v5.333H0z" fill="#C7270A" />
      <path d="M0 0h20v5.333H0z" fill="#303030" />
      <path d="M0 10.667h20V16H0z" fill="#FAC361" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h20v16H0z" fill="#fff" />
      </clipPath>
    </defs>
  </>,
  'Germany',
  '-2 -4 24 24',
);
