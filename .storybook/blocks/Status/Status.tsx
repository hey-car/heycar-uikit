import React from 'react';

const STATUS = {
  1: 'Draft',
  2: 'Candidate',
  3: 'Recommendation',
};

type StatusProps = {
  stage: number;
};

export const Status: React.FC<StatusProps> = ({ stage }) => (
  <div>
    <a
      href="./?path=/docs/guidelines-status-page"
    >
      {STATUS[stage]}
    </a>
  </div>
);
