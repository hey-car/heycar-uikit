/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

import { defaultData } from './Header.mock';

jest.mock('@heycar-uikit/themes', () => ({
  __esModule: true,
  default: jest.fn(() => ({})),
  useBreakpoint: jest.fn(() => ({
    breakpoints: {
      isTabletL: true,
      isDesktopS: true,
      isDesktopM: true,
      isDesktopL: true,
    },
  })),
}));

describe('Header Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Header {...defaultData} />)).toMatchSnapshot();
  });
});
