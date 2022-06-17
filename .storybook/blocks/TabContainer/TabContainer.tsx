import React, { useState } from 'react';

import { TabContainerProps } from './TabContainer.types';
import cn from 'classnames';

import styles from './TabContainer.module.css';


export const TabContainer: React.FC<TabContainerProps> = ({ tabs }) => {
  const [viewedTab, setViewedTab] = useState<number>(0);
  const isActive = (index: number): boolean => index === viewedTab;
  const handleTabClick = (index: number) => () => setViewedTab(index);

  if (!tabs.length) return null;

  return (
    <React.Fragment>
      <div className={styles.tabs}>
        {tabs.map(({ label }, index) => (
          <div
            data-index={index}
            key={`${label}_tab`}
            className={
              cn(styles.tabs__tab, {
                [styles.tabs__tab_active]: isActive(index)
              })
            }
            onClick={handleTabClick(index)}
          >
            {label}
          </div>
        ))}
      </div>
      {tabs[viewedTab].component}
    </React.Fragment>
  );
};
