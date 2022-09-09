import React, { ReactNode } from 'react';
import { Title } from '@storybook/addon-docs';

import { Status } from '../Status';

import styles from './ComponentHeader.module.css';

type ComponentHeaderProps = {
  name: string;
  version?: string;
  stage: number;
  status?: string;
  design?: string;
};

export const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  version,
  stage,
  design,
}) => {
  const packageName = name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
  const githubLink = `https://github.com/hey-car/heycar-uikit/tree/main/packages/${packageName}`;

  return (
    <div className={styles.component}>
      <Title>{name}</Title>
      <div className={styles.version}>{version}</div>
      {Number.isInteger(stage) && <Status stage={stage} />}
      <div className={styles.links}>
        <div className={styles.github}>
          <a href={githubLink} target="_blank">
            Github
          </a>
        </div>
        {design && (
          <div className={styles.design}>
            <a href={design} target="_blank">
              Figma
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
