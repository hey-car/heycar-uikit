/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import useCallback from '../hooks/useCollapse';

const openStyleState = { height: '100px', overflow: 'visible' };
const closeStyleState = {
  height: '0',
  overflow: 'hidden',
};
const useRefObject = {
  current: { scrollHeight: 100 },
};
const timeout = 1000;

describe('useCollapse', () => {
  jest.spyOn(React, 'useRef').mockReturnValue(useRefObject);

  it('collapse state open', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCallback(true));

    await waitForNextUpdate({
      timeout,
    });

    expect(result.current.collapseStyles).toMatchObject(openStyleState);
    expect(result.current.collapseContent).toMatchObject(useRefObject);

    act(() => {
      result.current.handlerTransitionEnd({} as React.SyntheticEvent);
    });

    expect(result.current.collapseStyles).toMatchObject({
      ...openStyleState,
      height: 'auto',
    });
  });

  it('collapse state close', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCallback(false));

    await waitForNextUpdate({
      timeout,
    });

    expect(result.current.collapseStyles).toMatchObject(closeStyleState);
    expect(result.current.collapseContent).toMatchObject(useRefObject);
  });
});
