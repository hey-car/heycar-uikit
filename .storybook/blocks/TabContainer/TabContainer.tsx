import React, { ReactNode, useState } from 'react';

import styles from './TabContainer.module.css';

type Tab = {
  label: string;
  component: ReactNode;
};

type TabContainerProps = {
  tabs: Tab[];
};

export const TabContainer: React.FC<TabContainerProps> = ({tabs}) => {
  const [viewedTab, setViewedTab] = useState<number>(0);
  const isActive = (index: number): boolean => index === viewedTab;

  if (!tabs.length) return null;

  return (
    <>
      <div className={styles.tab_header}>
        {tabs.map(({ label }, index) => <button className={isActive(index) && styles.active} onClick={() => setViewedTab(index)}>{label}</button>)}
      </div>
      {tabs[viewedTab].component}
    </>
  );
};
