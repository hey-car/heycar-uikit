/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

import { defaultData } from './Header.mock';

describe('Header Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Header {...defaultData} />)).toMatchSnapshot();
  });
});
