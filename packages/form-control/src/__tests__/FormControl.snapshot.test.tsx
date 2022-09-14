import React from 'react';
import { render } from '@testing-library/react';

import FormControl from '../FormControl';

describe('FormControl', () => {
  describe('Snapshots tests', () => {
    it('should match snapshot', () => {
      expect(render(<FormControl />)).toMatchSnapshot();
    });

    it('should forward ref to control wrapper', () => {
      const ref = jest.fn();

      render(<FormControl ref={ref} />);

      expect(ref.mock.calls[0][0].className).toMatch(/inner/);
    });

    it('should render label', () => {
      expect(
        render(<FormControl label={<span>This is label</span>} />),
      ).toMatchSnapshot();
    });

    it('should render hint', () => {
      expect(render(<FormControl hint="This is hint" />)).toMatchSnapshot();
    });

    it('should render error', () => {
      expect(render(<FormControl error="This is error" />)).toMatchSnapshot();
    });

    it('should not render hint if has error', () => {
      const result = render(<FormControl error="error" hint="hint" />);

      expect(result).toMatchSnapshot();
      expect(result.queryByText('hint')).toBeNull();
    });

    it('should render left addons', () => {
      expect(
        render(<FormControl leftIcon={<div>Left icon</div>} />),
      ).toMatchSnapshot();
    });

    it('should render right addons', () => {
      expect(
        render(<FormControl rightAddons={<div>Right addons</div>} />),
      ).toMatchSnapshot();
    });

    it('should render bottom addons', () => {
      expect(
        render(<FormControl bottomAddons={<div>Bottom addons</div>} />),
      ).toMatchSnapshot();
    });
  });
});
