import { AnchorHTMLAttributes } from 'react';

export interface ComponentProps {
  /**
   * If `true`, the component will be extended.
   */
  open: boolean;
  /**
   * The content of the collapse component
   */
  children: React.ReactNode;
  /**
   * The id for testing
   */
  dataTestId?: string;
}
type AnchorCollapseProps = ComponentProps & AnchorHTMLAttributes<HTMLElement>;

export type CollapseProps = AnchorCollapseProps;
