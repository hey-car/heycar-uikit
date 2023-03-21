import React from 'react';

import createSvgIcon from '../utils/createSvgIcon';

export const Mastercard = createSvgIcon(
  <>
    <path
      d="M0,0h24v24H0z"
      fill="transparent"
      stroke="#EAEAEA"
      strokeWidth=".5"
    />
    <path
      clipRule="evenodd"
      d="M20.708 15.606v.68h-.164v-.68h-.262v-.135h.688v.135h-.262Zm.537.127-.021.552h-.158l.044-.814h.151l.275.519.267-.519h.152l.045.814h-.158l-.022-.563-.224.427h-.127l-.224-.416Z"
      fill="#FF9F00"
      fillRule="evenodd"
    />
    <ellipse cx="7.724" cy="12" fill="#EB001B" rx="5.724" ry="5.714" />
    <ellipse cx="14.879" cy="12" fill="#F79E1B" rx="5.724" ry="5.714" />
    <path
      clipRule="evenodd"
      d="M11.301 16.46A5.7 5.7 0 0 0 13.447 12a5.7 5.7 0 0 0-2.146-4.46A5.7 5.7 0 0 0 9.155 12a5.7 5.7 0 0 0 2.146 4.46Z"
      fill="#FF5F00"
      fillRule="evenodd"
    />
  </>,
  'Mastercard',
);
