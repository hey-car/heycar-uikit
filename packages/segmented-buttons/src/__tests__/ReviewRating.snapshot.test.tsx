/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render } from '@testing-library/react';

import ReviewRating from '../SegmentedButtons';

const observe = jest.fn();

// @ts-ignore // no point in me mocking every method on the IO
window.IntersectionObserver = jest.fn(() => ({
  observe,
}));

describe('Button Snapshots tests', () => {
  it('should match snapshot', () => {
    expect(
      render(<ReviewRating id="snap-test-0" score={0} />),
    ).toMatchSnapshot();
  });

  // Scores

  it('should render a score of 1', () => {
    expect(
      render(<ReviewRating id="snap-test-1" score={1} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 2', () => {
    expect(
      render(<ReviewRating id="snap-test-2" score={2} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 3', () => {
    expect(
      render(<ReviewRating id="snap-test-3" score={3} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 4', () => {
    expect(
      render(<ReviewRating id="snap-test-4" score={4} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 5', () => {
    expect(
      render(<ReviewRating id="snap-test-5" score={5} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 6', () => {
    expect(
      render(<ReviewRating id="snap-test-6" score={6} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 7', () => {
    expect(
      render(<ReviewRating id="snap-test-7" score={7} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 8', () => {
    expect(
      render(<ReviewRating id="snap-test-8" score={8} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 9', () => {
    expect(
      render(<ReviewRating id="snap-test-9" score={9} />),
    ).toMatchSnapshot();
  });

  it('should render a score of 10', () => {
    expect(
      render(<ReviewRating id="snap-test-10" score={10} />),
    ).toMatchSnapshot();
  });

  // Sizes

  it('should render XS size', () => {
    expect(
      render(<ReviewRating id="snap-test-11" score={0} size="XS" />),
    ).toMatchSnapshot();
  });

  it('should render S size', () => {
    expect(
      render(<ReviewRating id="snap-test-12" score={0} size="S" />),
    ).toMatchSnapshot();
  });

  it('should render M size', () => {
    expect(
      render(<ReviewRating id="snap-test-13" score={0} size="M" />),
    ).toMatchSnapshot();
  });

  it('should render L size', () => {
    expect(
      render(<ReviewRating id="snap-test-14" score={0} size="L" />),
    ).toMatchSnapshot();
  });
});
