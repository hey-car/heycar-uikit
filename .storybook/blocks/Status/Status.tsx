import React from 'react';

const STATUS = {
  0: 'Proposal',
  1: 'In Development',
  2: 'In Review',
  3: 'Recommendation',
};

type StatusProps = {
  stage: number;
};

type Index = keyof typeof STATUS;

export const Status: React.FC<StatusProps> = ({ stage }) => (
    <div>
      <a
        href="./?path=/docs/guidelines-component-statuses--page"
      >
        {STATUS[stage as Index]}
      </a>
    </div>
);
