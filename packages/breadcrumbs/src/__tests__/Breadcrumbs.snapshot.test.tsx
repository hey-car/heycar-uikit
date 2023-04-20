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

describe('Button Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(render(<Breadcrumbs breadcrumbs={breadcrumbs} />)).toMatchSnapshot();
  });
});
