import { useEffect, useState } from 'react';

import breakpointsData from '../breakpoints.json';

const defaultBreakpoints = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isTabletS: false,
  isTabletL: false,
  isDesktopS: false,
  isDesktopM: false,
  isDesktopL: false,
};

function useBreakpoint() {
  const [width, setWidth] = useState<number>(0);
  const [breakpoints, setBreakpoints] = useState(defaultBreakpoints);

  useEffect(() => {
    const updateBreakpoint = () => {
      setWidth(window.innerWidth);

      // Desktop
      if (window.innerWidth >= breakpointsData['breakpoint-desktop']) {
        if (
          window.innerWidth >= breakpointsData['breakpoint-desktop-s'] &&
          window.innerWidth < breakpointsData['breakpoint-desktop-m']
        ) {
          setBreakpoints({
            ...defaultBreakpoints,
            isDesktop: true,
            isDesktopS: true,
          });
        }
        if (
          window.innerWidth >= breakpointsData['breakpoint-desktop-m'] &&
          window.innerWidth < breakpointsData['breakpoint-desktop-l']
        ) {
          setBreakpoints({
            ...defaultBreakpoints,
            isDesktop: true,
            isDesktopM: true,
          });
        }
        if (window.innerWidth >= breakpointsData['breakpoint-desktop-l']) {
          setBreakpoints({
            ...defaultBreakpoints,
            isDesktop: true,
            isDesktopL: true,
          });
        }
      }

      // Tablet
      if (
        window.innerWidth >= breakpointsData['breakpoint-tablet'] &&
        window.innerWidth < breakpointsData['breakpoint-desktop']
      ) {
        if (
          window.innerWidth >= breakpointsData['breakpoint-tablet-s'] &&
          window.innerWidth < breakpointsData['breakpoint-tablet-l']
        ) {
          setBreakpoints({
            ...defaultBreakpoints,
            isTablet: true,
            isTabletS: true,
          });
        }
        if (window.innerWidth >= breakpointsData['breakpoint-tablet-l']) {
          setBreakpoints({
            ...defaultBreakpoints,
            isTablet: true,
            isTabletL: true,
          });
        }
      }

      // Mobile
      if (window.innerWidth < breakpointsData['breakpoint-mobile']) {
        setBreakpoints({
          ...defaultBreakpoints,
          isMobile: true,
        });
      }
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return { breakpoints, width };
}

export default useBreakpoint;
