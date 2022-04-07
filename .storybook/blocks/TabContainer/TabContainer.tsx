import React, { ReactNode, useState } from 'react';

type Tab = {
  label: string;
  component: ReactNode;
};

type TabContainerProps = {
  tabs: Tab[];
};

export const TabContainer: React.FC<TabContainerProps> = ({tabs}) => {
  const [viewedTab, setViewedTab] = useState(0);
  return (
    <div>
      {tabs.map(({ label }, index) => <button onClick={() => setViewedTab(index)}>{label}</button>)}
      {tabs[viewedTab].component}
    </div>
  );
};
