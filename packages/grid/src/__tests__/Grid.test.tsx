import React from 'react';
import { render } from '@testing-library/react';

import { BreakpointValues, ColumnProps } from '../Column.types';
import { BreakpointGaps, breakpoints, BreakpointType } from '../Grid.types';
import { RowProps } from '../Row.types';
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

const generateClasses = (obj: BreakpointValues, prefix?: string) =>
  breakpoints.reduce((classes: string[], breakpoint) => {
    if (obj[breakpoint as BreakpointType]) {
      return [
        ...classes,
        `${breakpoint}${prefix ? `-${prefix}` : ''}-${
          obj[breakpoint as BreakpointType]
        }`,
      ];
    }

    return classes;
  }, []);

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
      const rowGap: BreakpointGaps = { sm: 0, md: 2, lg: 4 };
      const { container } = renderTestRow({ rowGap });

      const rowGapClasses = generateClasses(rowGap, 'row-gap');

      expect(container.firstElementChild).toHaveClass(...rowGapClasses);
    });

    it('should set `columnGap` classes', () => {
      const columnGap: BreakpointGaps = { sm: 0, md: 2, lg: 4 };
      const { container } = renderTestRow({ columnGap });
      const columnGapClasses = generateClasses(columnGap, 'column-gap');

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
      const { container } = renderTestColumn({ className, widths: { sm: 0 } });

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `widths` classes', () => {
      const widths = { sm: 12, md: 6, lg: 8, xl: 7 };
      const { container } = renderTestColumn({ widths });
      const widthClasses = generateClasses(widths);

      expect(container.firstElementChild).toHaveClass(...widthClasses);
    });

    it('should set `offset` classes', () => {
      const offset = { sm: 1, md: 2, lg: 3, xl: 4 };
      const { container } = renderTestColumn({ offset, widths: { sm: 0 } });
      const offsetClasses = generateClasses(offset, 'offset');

      expect(container.firstElementChild).toHaveClass(...offsetClasses);
    });

    it('should set `order` classes', () => {
      const order = { sm: 1, md: 2, lg: 3, xl: 4 };
      const { container } = renderTestColumn({ order, widths: { sm: 0 } });
      const orderClasses = generateClasses(order, 'order');

      expect(container.firstElementChild).toHaveClass(...orderClasses);
    });
  });

  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      /* eslint-disable-next-line @typescript-eslint/naming-convention */
      renderTestColumn({ Component: cb, widths: { sm: 0 } });

      expect(cb).toBeCalled();
    });
  });
});
