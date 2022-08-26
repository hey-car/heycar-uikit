import React from 'react';

import styles from './Status.module.css';

const STATUS = {
  0: 'Proposal',
  1: 'Ready',
  2: 'Recommendation',
};

type StatusProps = {
  stage: number;
};

type Index = keyof typeof STATUS;

export const Status: React.FC<StatusProps> = ({ stage }) => {
  const status = STATUS[stage as Index];
  // Convert string to snake case
  const statusClassName = status.toLowerCase().replace(' ', '_');
  return (
    <div>
      <a
        href="./?path=/docs/guidelines-component-statuses--page"
        className={`${styles.status} ${styles[statusClassName]}`}
      >
        {status}
      </a>
    </div>
  );
};
