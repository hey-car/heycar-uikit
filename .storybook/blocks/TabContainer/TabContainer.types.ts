import { ReactNode } from 'react';

type Tab = {
  label: string;
  component: ReactNode;
};
export type TabContainerProps = {
  tabs: Tab[];
};
