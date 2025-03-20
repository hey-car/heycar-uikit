import React, { FC } from 'react';

import Grid from '@heycar-uikit/grid';

import { DividerProps } from './Divider.types';

import styles from './styles/default.module.css';

const Divider: FC<DividerProps> = ({ dataTestId, ...restProps }) => (
  <Grid.Container>
    <div className={styles.divider} data-test-id={dataTestId} {...restProps}>
      <div className={styles.border}></div>
    </div>
  </Grid.Container>
);

export default Divider;
