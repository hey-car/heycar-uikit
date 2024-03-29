import { useCallback } from 'react';

import { headerClickTracking } from '../constants/Header.constants';
import { HeaderTrackingObj } from '../Header.types';

const useNavigationItem = (
  activeNavItem: string | undefined,
  setActiveNavItem: (id: string | undefined) => void,
  resetMenuState?: () => void,
) => {
  const toggleSubNav = useCallback(
    (id: string, isActive: boolean, force?: boolean) => {
      const nextActiveId = force || !isActive ? id : undefined;

      setActiveNavItem(nextActiveId);
    },
    [setActiveNavItem],
  );

  const keyboardOpen = useCallback(
    (
      e: React.KeyboardEvent<HTMLButtonElement>,
      id: string,
      isActive: boolean,
    ) => {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleSubNav(id, isActive);
      }
    },
    [toggleSubNav],
  );

  const closeSiblings = useCallback(
    (currentId: string, hasSubNav: boolean) => {
      if (currentId !== activeNavItem && hasSubNav) setActiveNavItem(undefined);
    },
    [activeNavItem, setActiveNavItem],
  );

  const itemOnClick = (
    track?: {
      fn: ((trackingObj: HeaderTrackingObj) => void) | undefined;
      obj: Partial<HeaderTrackingObj>;
    },
    onClick?: () => void,
    closeMenu = true,
  ) => {
    if (closeMenu && resetMenuState) resetMenuState();
    if (track && typeof track?.fn === 'function')
      track.fn({ ...headerClickTracking, ...track.obj } as HeaderTrackingObj);
    if (typeof onClick === 'function') onClick();
  };

  return {
    toggleSubNav,
    keyboardOpen,
    closeSiblings,
    itemOnClick,
  };
};

export { useNavigationItem };
