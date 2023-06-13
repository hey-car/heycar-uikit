/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react';

import Divider from '../Divider';
const dataTestId = 'test-id';

describe('Divider', () => {
  describe('Prop tests', () => {
    it('should set value', () => {
      const { getByTestId } = render(<Divider dataTestId={dataTestId} />);

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });
  });
});
