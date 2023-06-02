/* eslint-disable prettier/prettier */
import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumbs from '../Breadcrumbs';

interface Breadcrumb {
  link?: string;
  title: string;
}

const breadcrumbs: Breadcrumb[] = [
  {
    link: '#breadcrumbs',
    title: 'Breadcrumb Default',
  },
  {
    link: '#breadcrumb',
    title: 'Breadcrumb Default',
  },
  {
    link: '#breadcrumb',
    title: 'Breadcrumb Current',
  },
];

describe('Breadcrumbs', () => {
  describe('Prop tests', () => {
    it('should set value', () => {
      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

      expect(container.querySelector('span')).toHaveTextContent(
        'Breadcrumb Default',
      );
    });

    it('should set breadcrumbs', () => {
      const { container } = render(<Breadcrumbs breadcrumbs={breadcrumbs} />);

      expect(container.getElementsByTagName('li')).toHaveLength(3);
    });
  });
});
