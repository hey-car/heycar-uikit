/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react';

import Col from './components/Col';
import { ColProps } from './components/Col.types';
import Container from './components/Container';
import { ContainerProps } from './components/Container.types';
import Row from './components/Row';
import { RowProps } from './components/Row.types';

const Grid: {
  Row: FC<RowProps>;
  Col: FC<ColProps>;
  Container: FC<ContainerProps>;
  displayName: string;
} = {
  Row,
  Col,
  Container,
  displayName: 'Grid',
};

export default Grid;
