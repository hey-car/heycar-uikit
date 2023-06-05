/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render } from '@testing-library/react';

import { Gallery } from '@heycar-uikit/icons';

import SegmentedButtons from '../SegmentedButtons';

import { BTN_DATA, modifyBtns, TWO_BTNS } from './SegmentedButtons.mocks';

describe('Button Snapshots tests', () => {
  it('should render 2 buttons', () => {
    expect(
      render(
        <SegmentedButtons
          buttons={TWO_BTNS}
          id="sb-test-0"
          onChange={() => {}}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render 3 buttons', () => {
    expect(
      render(
        <SegmentedButtons
          buttons={BTN_DATA}
          id="sb-test-1"
          onChange={() => {}}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render buttons with icons', () => {
    const btnsWithIcons = modifyBtns(false, <Gallery />);

    expect(
      render(
        <SegmentedButtons
          buttons={btnsWithIcons}
          id="sb-test-2"
          onChange={() => {}}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render buttons as disabled', () => {
    const btnsDisabled = modifyBtns(true, undefined);

    expect(
      render(
        <SegmentedButtons
          buttons={btnsDisabled}
          id="sb-test-3"
          onChange={() => {}}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('should render an active button', () => {
    expect(
      <SegmentedButtons
        buttons={BTN_DATA}
        currentValue="lft"
        id="sb-test-4"
        onChange={() => {}}
      />,
    ).toMatchSnapshot();
  });

  it('should render an active button disabled', () => {
    const btnsDisabled = modifyBtns(true, undefined);

    expect(
      render(
        <SegmentedButtons
          buttons={btnsDisabled}
          currentValue="lft"
          id="sb-test-5"
          onChange={() => {}}
        />,
      ),
    ).toMatchSnapshot();
  });
});
