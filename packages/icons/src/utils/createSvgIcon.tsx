import * as React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../SvgIcon.types';

function createSvgIcon(
  path: React.SVGProps<SVGPathElement>,
  displayName: string,
  fontSize?: number | 'inherit' | undefined,
) {
  const Component = (
    props: IconProps,
    ref: React.ForwardedRef<HTMLOrSVGElement>,
  ) => (
    <SvgIcon
      dataTestId={`${displayName}Icon`}
      fontSize={fontSize}
      ref={ref}
      {...props}
    >
      {path}
    </SvgIcon>
  );

  Component.displayName = displayName;

  return React.memo(React.forwardRef<HTMLOrSVGElement, IconProps>(Component));
}

export default createSvgIcon;
