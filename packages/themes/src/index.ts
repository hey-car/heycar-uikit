// eslint-disable-next-line import/no-webpack-loader-syntax
import styles from '!!css-loader!./default.css';

export default styles.toString();
export { default as useBreakpoint } from './hooks/useBreakpoint.hook';
