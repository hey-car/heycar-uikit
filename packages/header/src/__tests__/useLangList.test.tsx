import { act, renderHook } from '@testing-library/react-hooks';

import { useLangList } from '../hooks/useLangList';

jest.useFakeTimers();

describe('useLangList', () => {
  it('should set isLangListOpen as true when isHovering is true', () => {
    const { result } = renderHook(() => useLangList());

    expect(result.current.isLangListOpen).toBe(false);

    act(() => {
      result.current.setIsHovering(true);
    });

    expect(result.current.isLangListOpen).toBe(true);
  });

  it('should set isLangListOpen as false, 300ms after isHovering is set as false', () => {
    const { result } = renderHook(() => useLangList());

    act(() => {
      result.current.setIsHovering(true);
    });

    expect(result.current.isLangListOpen).toBe(true);

    act(() => {
      result.current.setIsHovering(false);
    });

    expect(result.current.isLangListOpen).toBe(true);

    jest.advanceTimersByTime(300);

    expect(result.current.isLangListOpen).toBe(false);
  });

  it('should set isLangListOpen as false, 300ms after isFocused is set as false', () => {
    const { result } = renderHook(() => useLangList());

    act(() => {
      result.current.setIsLangListOpen(true);
    });

    expect(result.current.isLangListOpen).toBe(true);

    act(() => {
      result.current.setIsFocused(false);
    });

    expect(result.current.isLangListOpen).toBe(true);

    jest.advanceTimersByTime(300);

    expect(result.current.isLangListOpen).toBe(false);
  });

  it('should clear isLangListOpen = false timeout by setting isHovering to true', () => {
    const { result } = renderHook(() => useLangList());

    act(() => {
      result.current.setIsHovering(true);
    });

    expect(result.current.isLangListOpen).toBe(true);

    // creates setTimeout to set isLangListOpen as false
    act(() => {
      result.current.setIsHovering(false);
    });

    act(() => {
      result.current.setIsHovering(true);
    });

    jest.advanceTimersByTime(300);

    expect(result.current.isLangListOpen).toBe(true);
  });

  it('should clear isLangListOpen = false timeout by setting isFocused to true', () => {
    const { result } = renderHook(() => useLangList());

    act(() => {
      result.current.setIsHovering(true);
    });

    expect(result.current.isLangListOpen).toBe(true);

    // creates setTimeout to set isLangListOpen as false
    act(() => {
      result.current.setIsHovering(false);
    });

    act(() => {
      result.current.setIsFocused(true);
    });

    jest.advanceTimersByTime(300);

    expect(result.current.isLangListOpen).toBe(true);
  });

  it('should switch isLangListOpen between true and false when pressing space on keyboard', () => {
    const { result } = renderHook(() => useLangList());

    act(() => {
      // @ts-ignore
      result.current.keyboardOpen({ code: 'Space', preventDefault: jest.fn() });
    });

    expect(result.current.isLangListOpen).toBe(true);

    act(() => {
      // @ts-ignore
      result.current.keyboardOpen({ code: 'Space', preventDefault: jest.fn() });
    });

    expect(result.current.isLangListOpen).toBe(false);
  });
});
