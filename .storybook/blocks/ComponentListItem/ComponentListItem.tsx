import React, { ReactNode } from 'react';

import { Status } from '../Status';

import styles from './ComponentListItem.module.css';

type ComponentListItemProps = {
  name: string;
  version?: string;
  stage: number;
  status?: string;
  design?: string;
};

export const ComponentListItem: React.FC<ComponentListItemProps> = ({
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
  const npmLink = `https://www.npmjs.com/package/@heycar-uikit/${packageName}`;
  const Atoms = ['grid', 'icons', 'logo', 'typography'];

  return (
    <div className={styles.component}>
      <div className={styles.details}>
        <h3>
          <a
            href={
              name === 'Fonts'
                ? '/?path=/docs/guidelines-fonts--page'
                : `/?path=/docs/components-${
                    Atoms.includes(name.toLowerCase()) ? 'atoms' : 'molecules'
                  }--${name}`
            }
          >
            {name}
          </a>
        </h3>
        <span className={styles.version}>{version}</span>
        {Number.isInteger(stage) && <Status stage={stage} />}
      </div>

      <div className={styles.links}>
        <div className={styles.github}>
          <a href={githubLink} target="_blank">
            &nbsp;
          </a>
        </div>
        <div className={styles.npm}>
          <a href={npmLink} target="_blank">
            &nbsp;
          </a>
        </div>
        {design && (
          <div className={styles.design}>
            <a href={design} target="_blank">
              &nbsp;
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
