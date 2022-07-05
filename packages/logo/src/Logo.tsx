import React from 'react';

import { Primary, Secondary, Tertiary } from './assets/Logo.svgs';
import { LogoProps } from './Logo.types';

function renderLogo(color: string, size: number, viewBox: string) {
  switch (color) {
    case 'primary':
      return <Primary size={size} viewBox={viewBox} />;
    case 'secondary':
      return <Secondary size={size} viewBox={viewBox} />;
    case 'tertiary':
      return <Tertiary size={size} viewBox={viewBox} />;
    default:
      return <Primary size={size} viewBox={viewBox} />;
  }
}

function Logo({
  size = 32,
  viewBox = '0 0 97 32',
  color = 'primary',
}: LogoProps) {
  return (
    <div className="logo-container">{renderLogo(color, size, viewBox)}</div>
  );
}

export default Logo;
