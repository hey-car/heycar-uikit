import { useEffect, useState } from 'react';

import breakpointsData from '../breakpoints.json';

type breakpoints = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTabletS: boolean;
  isTabletL: boolean;
  isDesktopS: boolean;
  isDesktopM: boolean;
  isDesktopL: boolean;
};

function useBreakpoint() {
  const [width, setWidth] = useState<number>(0);
  const [breakpoints, setBreakpoints] = useState({} as breakpoints);

  useEffect(() => {
    const updateBreakpoint = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth >= breakpointsData['breakpoint-desktop']) {
        if (
          window.innerWidth >= breakpointsData['breakpoint-desktop-s'] &&
          window.innerWidth < breakpointsData['breakpoint-desktop-m']
        ) {
          setBreakpoints({ isDesktop: true, isDesktopS: true } as breakpoints);
        }
        if (
          window.innerWidth >= breakpointsData['breakpoint-desktop-m'] &&
          window.innerWidth < breakpointsData['breakpoint-desktop-l']
        ) {
          setBreakpoints({ isDesktop: true, isDesktopM: true } as breakpoints);
        }
        if (window.innerWidth >= breakpointsData['breakpoint-desktop-l']) {
          setBreakpoints({ isDesktop: true, isDesktopL: true } as breakpoints);
        }
      }

      if (
        window.innerWidth >= breakpointsData['breakpoint-tablet'] &&
        window.innerWidth < breakpointsData['breakpoint-desktop']
      ) {
        if (
          window.innerWidth >= breakpointsData['breakpoint-tablet-s'] &&
          window.innerWidth < breakpointsData['breakpoint-tablet-l']
        ) {
          setBreakpoints({ isTablet: true, isTabletS: true } as breakpoints);
        }
        if (window.innerWidth >= breakpointsData['breakpoint-tablet-l']) {
          setBreakpoints({ isTablet: true, isTabletL: true } as breakpoints);
        }
      }

      if (window.innerWidth < breakpointsData['breakpoint-mobile']) {
        setBreakpoints({ isMobile: true } as breakpoints);
      }
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return { breakpoints, width };
}

export default useBreakpoint;
