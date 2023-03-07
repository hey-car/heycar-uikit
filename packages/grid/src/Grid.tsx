/* eslint-disable @typescript-eslint/naming-convention */
import Col from './components/Col';
import Container from './components/Container';
import Row from './components/Row';

const Grid = {
  Row,
  Col,
  Container,
  displayName: 'Grid',
} as const;

export default Grid;
