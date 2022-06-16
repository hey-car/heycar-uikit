import React from 'react';
import { render } from '@testing-library/react';

import { ColumnProps } from '../components/column/Column.types';
import { GapOptions, RowProps } from "../components/row/Row.types";
import { Column, Row } from '..';

const renderTestRow = (props: Omit<RowProps, 'children'>) =>
  render(
    <Row {...props}>
      <div>Hello World!</div>
    </Row>,
  );

const renderTestColumn = (props: Omit<ColumnProps, 'children'>) =>
  render(
    <Column {...props}>
      <div>Hello World!</div>
    </Column>,
  );

const breakpoints = ['sm', 'md', 'lg', 'xl'];

describe('Row', () => {
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = renderTestRow({ className });

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `justify` class', () => {
      const justify = 'center';
      const { container } = renderTestRow({ justify });

      expect(container.firstElementChild).toHaveClass(`justify-${justify}`);
    });

    it('should set `align` class', () => {
      const align = 'center';
      const { container } = renderTestRow({ align });

      expect(container.firstElementChild).toHaveClass(`align-${align}`);
    });

    it('should set `reverse` class', () => {
      const { container } = renderTestRow({ reverse: true });

      expect(container.firstElementChild).toHaveClass('reverse');
    });

    it('should set `rowGap` classes', () => {
      const rowGap: GapOptions[] = [0, 2, 4];
      const { container } = renderTestRow({ rowGap });
      const rowGapClasses = rowGap.map(
        (gap, index) => `${breakpoints[index]}-row-gap-${gap}`,
      );

      expect(container.firstElementChild).toHaveClass(...rowGapClasses);
    });

    it('should set `columnGap` classes', () => {
      const columnGap: GapOptions[] = [0, 2, 4];
      const { container } = renderTestRow({ columnGap });
      const columnGapClasses = columnGap.map(
        (gap, index) => `${breakpoints[index]}-column-gap-${gap}`,
      );

      expect(container.firstElementChild).toHaveClass(...columnGapClasses);
    });
  });

  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      renderTestRow({ Component: cb });

      expect(cb).toBeCalled();
    });
  });
});

describe('Column', () => {
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = renderTestColumn({ className, widths: [0] });

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `widths` classes', () => {
      const widths = [12, 6, 8, 7];
      const { container } = renderTestColumn({ widths });
      const widthClasses = widths.map(
        (width, index) => `${breakpoints[index]}-${width}`,
      );

      expect(container.firstElementChild).toHaveClass(...widthClasses);
    });

    it('should set `offset` classes', () => {
      const offset = [1, 2, 3, 4];
      const { container } = renderTestColumn({ offset, widths: [0] });
      const offsetClasses = offset.map(
        (off, index) => `${breakpoints[index]}-offset-${off}`,
      );

      expect(container.firstElementChild).toHaveClass(...offsetClasses);
    });

    it('should set `order` classes', () => {
      const order = [1, 2, 3, 4];
      const { container } = renderTestColumn({ order, widths: [0] });
      const orderClasses = order.map(
        (ord, index) => `${breakpoints[index]}-order-${ord}`,
      );

      expect(container.firstElementChild).toHaveClass(...orderClasses);
    });
  });

  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      renderTestColumn({ Component: cb, widths: [0] });

      expect(cb).toBeCalled();
    });
  });
});
