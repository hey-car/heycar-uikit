import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Collapse from '../Collapse';

const dataTestId = 'test-id';
const collapseTestBody = 'test body';

describe('Collapse', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Collapse dataTestId={dataTestId} open={true}>
          {collapseTestBody}
        </Collapse>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set children attribute', () => {
      const { container } = render(
        <Collapse open={true}>{collapseTestBody}</Collapse>,
      );

      expect(container.firstElementChild).toHaveTextContent(collapseTestBody);
    });
  });

  /**
   * CSS rules test
   */
  describe('CSS tests', () => {
    it('open:false should has collapse style rules', () => {
      const { container } = render(
        <Collapse open={false}>{collapseTestBody}</Collapse>,
      );

      expect(container.firstElementChild).toHaveStyle({
        height: '0',
      });
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(
        <Collapse className={className} open={true}>
          {collapseTestBody}
        </Collapse>,
      );

      expect(container.firstElementChild).toHaveClass(className);
    });
  });

  /**
   * Actions tests
   */
  describe('Actions tests', () => {
    it('should trigger onTransitionEnd after transition', () => {
      const onTransitionEnd = jest.fn();

      const { getByTestId } = render(
        <Collapse
          dataTestId="test"
          onTransitionEnd={onTransitionEnd}
          open={false}
        >
          {collapseTestBody}
        </Collapse>,
      );

      fireEvent.transitionEnd(getByTestId('test'));

      expect(onTransitionEnd).toBeCalled();
    });
  });

  it('should unmount without errors', () => {
    const { unmount } = render(<Collapse open={true}>Text</Collapse>);

    expect(unmount).not.toThrowError();
  });
});
