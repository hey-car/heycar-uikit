import { useCallback } from 'react';

const useNavigationItem = (
  activeNavItem: string | undefined,
  setActiveNavItem: (id: string | undefined) => void,
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

  return {
    toggleSubNav,
    keyboardOpen,
    closeSiblings,
  };
};

export { useNavigationItem };
