import { useEffect, useState } from 'react';

export const useBreakpointHook = () => {
  const [breakpoint, setBreakpoint] = useState<number | undefined>();

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(window.innerWidth);
    };

    updateBreakpoint();

    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};
