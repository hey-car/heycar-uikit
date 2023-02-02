import { act, renderHook } from '@testing-library/react-hooks';

import useBreakpoint, {
  defaultBreakpoints,
} from '../../hooks/useBreakpoint.hook';

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  global.dispatchEvent(new Event('resize'));
}

describe('useBreakpoint', () => {
  beforeEach(() => {
    setWidth(0);
  });

  it('should evaluate width return value', () => {
    const { result } = renderHook(() => useBreakpoint());

    act(() => {
      setWidth(360);
    });
    expect(result.current.width).toEqual(360);

    act(() => {
      setWidth(960);
    });
    expect(result.current.width).toEqual(960);
  });

  it('should return all correct breakpoints', () => {
    const { result } = renderHook(() => useBreakpoint());

    act(() => {
      setWidth(560);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isMobile: true,
    });

    act(() => {
      setWidth(768);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isTablet: true,
      isTabletS: true,
    });

    act(() => {
      setWidth(1024);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isTablet: true,
      isTabletL: true,
    });

    act(() => {
      setWidth(1280);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isDesktop: true,
      isDesktopS: true,
    });

    act(() => {
      setWidth(1366);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isDesktop: true,
      isDesktopM: true,
    });

    act(() => {
      setWidth(1440);
    });
    expect(result.current.breakpoints).toEqual({
      ...defaultBreakpoints,
      isDesktop: true,
      isDesktopL: true,
    });
  });
});
