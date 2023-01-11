import { HTMLAttributes } from 'react';

export type ContainerProps = HTMLAttributes<Element> & {
  as?: keyof JSX.IntrinsicElements;
};
