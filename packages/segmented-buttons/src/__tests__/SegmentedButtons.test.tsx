/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Gallery } from '@heycar-uikit/icons';

import SegmentedButtons from '../SegmentedButtons';

import { BTN_DATA, modifyBtns } from './SegmentedButtons.mocks';

const dataTestId = 'test-id';

describe('SegmentedButtons', () => {
  const onChange = jest.fn();

  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <SegmentedButtons
          buttons={BTN_DATA}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set className', () => {
      const className = 'test-class';
      const { container } = render(
        <SegmentedButtons
          buttons={BTN_DATA}
          className={className}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should forward ref to SegmentedButtons', () => {
      const radioGroupRef = jest.fn();
      const { getByTestId } = render(
        <SegmentedButtons
          buttons={BTN_DATA}
          dataTestId={dataTestId}
          onChange={onChange}
          ref={radioGroupRef}
        />,
      );

      expect(radioGroupRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });
  });

  /**
   * Render tests
   */
  describe('Render tests', () => {
    it('should render buttons with correct labels', () => {
      const { getByRole } = render(
        <SegmentedButtons
          buttons={BTN_DATA}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(getByRole('radio', { name: 'Left' })).toBeInTheDocument();
      expect(getByRole('radio', { name: 'Middle' })).toBeInTheDocument();
      expect(getByRole('radio', { name: 'Right' })).toBeInTheDocument();
    });

    it('should render icons in the buttons if passed', () => {
      const withIcons = modifyBtns(false, <Gallery />);

      const { getAllByTestId } = render(
        <SegmentedButtons
          buttons={withIcons}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(getAllByTestId('GalleryIcon').length).toEqual(3);
    });

    it('should disable the buttons when isDisabled is set', () => {
      const btnsDisabled = modifyBtns(true, undefined);

      const { getByRole } = render(
        <SegmentedButtons
          buttons={btnsDisabled}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(getByRole('radio', { name: 'Left' })).toBeDisabled();
      expect(getByRole('radio', { name: 'Middle' })).toBeDisabled();
      expect(getByRole('radio', { name: 'Right' })).toBeDisabled();
    });

    it('should unmount without errors', () => {
      const { unmount } = render(
        <SegmentedButtons
          buttons={BTN_DATA}
          dataTestId={dataTestId}
          onChange={onChange}
        />,
      );

      expect(unmount).not.toThrowError();
    });
  });

  it('doesnt call on change when disabled', () => {
    const newOnChange = jest.fn();
    const btnsDisabled = modifyBtns(true, undefined);

    const { getByRole } = render(
      <SegmentedButtons
        buttons={btnsDisabled}
        dataTestId={dataTestId}
        onChange={newOnChange}
      />,
    );

    userEvent.click(getByRole('radio', { name: 'Left' }));
    expect(newOnChange).not.toHaveBeenCalled();

    userEvent.click(getByRole('radio', { name: 'Middle' }));
    expect(newOnChange).not.toHaveBeenCalled();

    userEvent.click(getByRole('radio', { name: 'Right' }));
    expect(newOnChange).not.toHaveBeenCalled();
  });
});
