import { AllHTMLAttributes } from 'react';

export interface ComponentProps {
  /**
   * The content of the button
   */
  children?: React.ReactNode;
  /**
   * The component used for the root node. Either a string to use a HTML element or a component
   */
  Component?: React.ElementType;
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * Set the color of the icon by default it will be `inherit`
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'tertiary';
  /**
   * The `fontSize` applied to the icon. Defaults to `24px`
   */
  fontSize?: 'inherit' | number;
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element. For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20", this means that the coordinates inside the SVG will go from the top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox?: string;
  /**
   * Provides a human-readable title for the element that contains it. https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string;

  /**
   * The id for testing
   */
  dataTestId?: string;
}

export type SvgIconProps = ComponentProps & AllHTMLAttributes<HTMLOrSVGElement>;

export type IconProps = Omit<SvgIconProps, 'children'>;
