import React from 'react';

import { Primary, Secondary, Tertiary } from './assets/Logo.svgs';
import { LogoProps } from './Logo.types';

function renderLogo(color: string, size: number) {
  switch (color) {
    case 'primary':
      return <Primary size={size} />;
    case 'secondary':
      return <Secondary size={size} />;
    case 'tertiary':
      return <Tertiary size={size} />;
    default:
      return <Primary size={size} />;
  }
}

function Logo({ size = 32, color = 'primary' }: LogoProps) {
  return <div className="logo-container">{renderLogo(color, size)}</div>;
}

export default Logo;
