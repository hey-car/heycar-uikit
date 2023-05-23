/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook } from '@testing-library/react-hooks';

import { useNavigationItem } from '../hooks/useNavigationItem';

describe('useNavigationItem', () => {
  const setActiveNavItem = jest.fn();

  describe('toggleSubNav', () => {
    const { result } = renderHook(() =>
      useNavigationItem('test', setActiveNavItem),
    );

    it('calls setActiveNavItem with the given id if isActive and force are falsy', () => {
      result.current.toggleSubNav('test-1', false);

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-1');
    });

    it('calls setActiveNavItem with undefined if isActive is true', () => {
      result.current.toggleSubNav('test-1', true);

      expect(setActiveNavItem).toHaveBeenLastCalledWith(undefined);
    });

    it('calls setActiveNavItem with undefined if force is true', () => {
      result.current.toggleSubNav('test-2', false, true);

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-2');

      result.current.toggleSubNav('test-3', true, true);

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-3');
    });
  });

  describe('keyboardOpen', () => {
    const { result } = renderHook(() =>
      useNavigationItem('test', setActiveNavItem),
    );

    it('calls toggleSubNav with the given id and isActive value when passed a "Space" key keyboard event', () => {
      result.current.keyboardOpen(
        // @ts-ignore
        { code: 'Space', preventDefault: () => {} },
        'test-4',
        false,
      );

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-4');
    });

    it('does nothing when passed a keyboard event from key that isnt "Space"', () => {
      result.current.keyboardOpen(
        // @ts-ignore
        { code: 'Enter', preventDefault: () => {} },
        'test-5',
        false,
      );

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-4');
    });
  });

  describe('closeSiblings', () => {
    const activeNavItem = 'test-7';
    const { result } = renderHook(() =>
      useNavigationItem(activeNavItem, setActiveNavItem),
    );

    it('does nothing if the passed id is not activeNavItem but hasSubNav is false', () => {
      const hasSubNav = false;

      result.current.closeSiblings('test-6', hasSubNav);

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-4');
    });

    it('does nothing if the passed id is the activeNavItem', () => {
      const hasSubNav = true;

      result.current.closeSiblings(activeNavItem, hasSubNav);

      expect(setActiveNavItem).toHaveBeenLastCalledWith('test-4');
    });

    it('calls setActiveNavItem with undefined if the passed id is not activeNavItem and hasSubNav is true', () => {
      const hasSubNav = true;

      result.current.closeSiblings('test-8', hasSubNav);

      expect(setActiveNavItem).toHaveBeenLastCalledWith(undefined);
    });
  });
});
