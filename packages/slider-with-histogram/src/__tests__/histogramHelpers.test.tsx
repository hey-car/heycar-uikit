import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { debounce, sanitiseRangeIndexes } from '../utils/histogramHelpers';

describe('sanitiseRangeIndexes', () => {
  const defaultData = [0, 1, 2, 3, 4, 3, 2, 0];
  const dataLastIndex = defaultData.length - 1;

  it('returns the first and last index for histogramData if selectedRangeIndexes is undefined', () => {
    const response = sanitiseRangeIndexes(undefined, defaultData);

    expect(response).toEqual([0, dataLastIndex]);
  });

  it('returns the value as 0 if a number < 0 is passed', () => {
    const response = sanitiseRangeIndexes([-2, -1], defaultData);

    expect(response).toEqual([0, 0]);
  });

  it('returns the value as the last index for histogramData if a number > than last index for histogramData is passed', () => {
    const response = sanitiseRangeIndexes([10, 11], defaultData);

    expect(response).toEqual([dataLastIndex, dataLastIndex]);
  });

  it('returns the values passed if they are match indexes in histogramData', () => {
    const response = sanitiseRangeIndexes([1, 5], defaultData);
    const response2 = sanitiseRangeIndexes([0, dataLastIndex], defaultData);

    expect(response).toEqual([1, 5]);
    expect(response2).toEqual([0, dataLastIndex]);
  });
});

describe('debounce', () => {
  test('debounce function works correctly', async () => {
    const mockFunction = jest.fn();

    const { getByText } = render(
      <button onClick={debounce(mockFunction)}>Click me</button>,
    );

    // Simulate multiple clicks within the debounce timeout
    fireEvent.click(getByText('Click me'));
    fireEvent.click(getByText('Click me'));
    fireEvent.click(getByText('Click me'));

    await waitFor(() => {
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
