import * as React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../SvgIcon.types';

function createSvgIcon(
  path: React.SVGProps<SVGPathElement>,
  displayName: string,
  viewBox?: string,
) {
  const Component = (
    props: IconProps,
    ref: React.ForwardedRef<HTMLOrSVGElement>,
  ) => (
    <SvgIcon
      dataTestId={`${displayName}Icon`}
      ref={ref}
      viewBox={viewBox}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {path}
    </SvgIcon>
  );

  Component.displayName = displayName;

  return React.memo(React.forwardRef<HTMLOrSVGElement, IconProps>(Component));
}

export default createSvgIcon;
