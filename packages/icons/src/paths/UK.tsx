/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const UK = createSvgIcon(
  <>
    <g clipPath="url(#a)">
      <path d="M0 0h20v16H0z" fill="#052962" />
      <path d="M18 16 0 2V0h2l18 14v2h-2Z" fill="#fff" />
      <path d="M0 0v1l19 15h1v-1L1 0H0Z" fill="#C7270A" />
      <path d="M2 16 20 2V0h-2L0 14v2h2Z" fill="#fff" />
      <path d="M20 0v1L1 16H0v-1L19 0h1Z" fill="#C7270A" />
      <path d="M8 0h4v18H8z" fill="#fff" />
      <path d="M20 6v4H0V6z" fill="#fff" />
      <path d="M9 0h2v18H9z" fill="#C7270A" />
      <path d="M20 7v2H0V7z" fill="#C7270A" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h20v16H0z" fill="#fff" />
      </clipPath>
    </defs>
  </>,
  'UK',
  '-2 -4 24 24',
);
