import { useEffect, useState } from 'react';

import { BREAKPOINTS } from '@heycar-uikit/vars';

export const RESETTED_BREAKPOINTS = {
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
  const [width, setWidth] = useState(0);

  const [breakpoints, setBreakpoints] = useState({
    ...RESETTED_BREAKPOINTS,
    isMobile: true,
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      setWidth(window.innerWidth);

      // Desktop
      if (window.innerWidth >= BREAKPOINTS['breakpoint-desktop']) {
        if (
          window.innerWidth >= BREAKPOINTS['breakpoint-desktop-s'] &&
          window.innerWidth < BREAKPOINTS['breakpoint-desktop-m']
        ) {
          setBreakpoints({
            ...RESETTED_BREAKPOINTS,
            isDesktop: true,
            isDesktopS: true,
          });
        }
        if (
          window.innerWidth >= BREAKPOINTS['breakpoint-desktop-m'] &&
          window.innerWidth < BREAKPOINTS['breakpoint-desktop-l']
        ) {
          setBreakpoints({
            ...RESETTED_BREAKPOINTS,
            isDesktop: true,
            isDesktopM: true,
          });
        }
        if (window.innerWidth >= BREAKPOINTS['breakpoint-desktop-l']) {
          setBreakpoints({
            ...RESETTED_BREAKPOINTS,
            isDesktop: true,
            isDesktopL: true,
          });
        }
      }

      // Tablet
      if (
        window.innerWidth >= BREAKPOINTS['breakpoint-tablet'] &&
        window.innerWidth < BREAKPOINTS['breakpoint-desktop']
      ) {
        if (
          window.innerWidth >= BREAKPOINTS['breakpoint-tablet-s'] &&
          window.innerWidth < BREAKPOINTS['breakpoint-tablet-l']
        ) {
          setBreakpoints({
            ...RESETTED_BREAKPOINTS,
            isTablet: true,
            isTabletS: true,
          });
        }
        if (window.innerWidth >= BREAKPOINTS['breakpoint-tablet-l']) {
          setBreakpoints({
            ...RESETTED_BREAKPOINTS,
            isTablet: true,
            isTabletL: true,
          });
        }
      }

      // Mobile
      if (window.innerWidth < BREAKPOINTS['breakpoint-mobile']) {
        setBreakpoints({
          ...RESETTED_BREAKPOINTS,
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
