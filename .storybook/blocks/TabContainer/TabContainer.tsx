import React, { useState } from 'react';

import styles from './TabContainer.module.css';
import { TabContainerProps } from './TabContainer.types';
import cn from 'classnames';

export const TabContainer: React.FC<TabContainerProps> = ({ tabs }) => {
  const [viewedTab, setViewedTab] = useState<number>(0);
  const isActive = (index: number): boolean => index === viewedTab;

  const getClassName = (index: number): string => cn(isActive(index) && styles.active);

  const handleTabClick = (index: number) => {
    setViewedTab(index);
  };

  if (!tabs.length) return null;

  return (
    <React.Fragment>
      <div className={styles.tab_header}>
        {tabs.map(({ label }, index) => (
          <button
            data-index={index}
            key={`${label}_tab`}
            className={getClassName(index)}
            onClick={() => handleTabClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs[viewedTab].component}
    </React.Fragment>
  );
};
