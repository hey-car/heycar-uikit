/* eslint-disable @typescript-eslint/ban-ts-comment */
import { renderHook } from '@testing-library/react-hooks';

import { headerClickTracking } from '../constants/Header.constants';
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

  describe('itemOnClick', () => {
    const trackingFn = jest.fn();
    const onClickCB = jest.fn();
    const label = 'Test-label';
    const { result } = renderHook(() =>
      useNavigationItem('test', setActiveNavItem),
    );

    it('calls tracking function with object values if passed', () => {
      result.current.itemOnClick({
        fn: trackingFn,
        obj: { label, href: 'heycar.com' },
      });

      expect(trackingFn).toHaveBeenCalledTimes(1);
      expect(trackingFn).toHaveBeenLastCalledWith({
        ...headerClickTracking,
        label,
        href: 'heycar.com',
      });
      expect(onClickCB).not.toHaveBeenCalled();
    });

    it('only calls onClick if given an onClick, but no tracking object', () => {
      result.current.itemOnClick(undefined, onClickCB);

      // call from previous 'it'
      expect(trackingFn).toHaveBeenCalledTimes(1);
      // call from this 'it'
      expect(onClickCB).toHaveBeenCalledTimes(1);
    });

    it('calls tracking function with details and onClick, if given a label, tracking function and onClick function', () => {
      const newLabel = 'Test 2';

      result.current.itemOnClick(
        { fn: trackingFn, obj: { label: newLabel, href: 'hey.car' } },
        onClickCB,
      );

      expect(trackingFn).toHaveBeenCalledTimes(2);
      expect(trackingFn).toHaveBeenLastCalledWith({
        ...headerClickTracking,
        label: newLabel,
        href: 'hey.car',
      });

      expect(onClickCB).toHaveBeenCalledTimes(2);
    });

    it('calls setIsNavTrayOpen with false after calling itemOnClick', () => {
      const newLabel = 'Test 2';

      const setIsNavTrayOpen = jest.fn();
      const { result } = renderHook(() =>
        useNavigationItem('test', setActiveNavItem, setIsNavTrayOpen),
      );

      result.current.itemOnClick({
        fn: trackingFn,
        obj: { label: newLabel },
      });

      expect(setIsNavTrayOpen).toBeCalledWith(false);
    });

    it('doesnt call setIsNavTrayOpen after calling itemOnClick if closeMenu is set to false', () => {
      const newLabel = 'Test 2';

      const setIsNavTrayOpen = jest.fn();
      const { result } = renderHook(() =>
        useNavigationItem('test', setActiveNavItem, setIsNavTrayOpen),
      );

      result.current.itemOnClick(
        {
          fn: trackingFn,
          obj: { label: newLabel },
        },
        undefined,
        false,
      );

      expect(setIsNavTrayOpen).not.toBeCalled();
    });
  });
});
