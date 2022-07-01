import { FC } from 'react';

import Col from './components/Col';
import { ColProps } from './components/Col.types';
import Row from './components/Row';
import { RowProps } from './components/Row.types';

const Grid: {
  Row: FC<RowProps>;
  Col: FC<ColProps>;
  displayName: string;
} = {
  Row,
  Col,
  displayName: 'Grid',
};

export default Grid;
