import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Canada = createSvgIcon(
  <>
    <g clip-path="url(#a)">
      <path
        d="M18.095 0H1.905C.853 0 0 .955 0 2.133v11.734C0 15.045.853 16 1.905 16h16.19C19.147 16 20 15.045 20 13.867V2.133C20 .955 19.147 0 18.095 0Z"
        fill="#fff"
      />
      <path
        clipRule="evenodd"
        d="M0 0h4.762v16H0V0Zm15.238 0H20v16h-4.762V0ZM10 4.267 9.048 6.4 7.619 5.333v2.134l-.952 1.066L8.57 9.6h.953v2.133h.952V9.6h.953l1.904-1.067-.952-1.066V5.333L10.857 6.4 10 4.267Z"
        fill="red"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h20v16H0z" fill="#fff" />
      </clipPath>
    </defs>
  </>,
  'Canada',
  '-2 -4 24 24',
);
