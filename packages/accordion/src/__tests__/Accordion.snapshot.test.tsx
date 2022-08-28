import React from 'react';
import { render } from '@testing-library/react';

import Accordion from '../Accordion';

const accordionTitle = 'title';
const accordionBodyText =
  ' You’ll struggle to find any objective reasons to buy a Q3 Sportback over the standard Audi Q3. But, if you want to stand out, the Sportback is';
const dateNow = 1661419668701;

describe('Accordion Snapshots tests', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(dateNow);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should match snapshot', () => {
    expect(
      render(<Accordion title={accordionTitle}>{accordionBodyText}</Accordion>),
    ).toMatchSnapshot();
  });

  it('should render accordion title with HTML tag', () => {
    expect(
      render(
        <Accordion title={<h1>{accordionTitle}</h1>}>
          {accordionBodyText}
        </Accordion>,
      ),
    ).toMatchSnapshot();
  });

  it('should render accordion `disabled`', () => {
    expect(
      render(
        <Accordion disabled={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      ),
    ).toMatchSnapshot();
  });

  it('should render accordion `open=true` by default', () => {
    expect(
      render(
        <Accordion open={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      ),
    ).toMatchSnapshot();
  });
});
