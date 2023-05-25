/* eslint-disable @typescript-eslint/naming-convention */

import {
  BURGER_MENU_SUBNAV_MAX_ITEMS,
  DEFAULT_LOCALE,
  LANG_OPTIONS,
  SUBNAV_CONFIG,
} from '../constants/Header.constants';
import {
  extendNavigation,
  getConfigType,
  getSubNavGroupDetails,
} from '../utils/navigationHelpers';

describe('navigationHelpers', () => {
  describe('getConfigType', () => {
    it('returns config for full if total groups is 1', () => {
      const groupDetails = getConfigType(0, 1);
      const groupDetails2 = getConfigType(100, 1);

      expect(groupDetails).toEqual(SUBNAV_CONFIG.full);
      expect(groupDetails2).toEqual(SUBNAV_CONFIG.full);
    });

    it(' returns config for third if total groups is 2 and groupIndex is 0', () => {
      const groupDetails = getConfigType(0, 2);

      expect(groupDetails).toEqual(SUBNAV_CONFIG.quarter);
    });

    it('returns config for half if total groups is 2 and groupIndex is > 0', () => {
      const groupDetails = getConfigType(1, 2);
      const groupDetails2 = getConfigType(100, 2);

      expect(groupDetails).toEqual(SUBNAV_CONFIG.half);
      expect(groupDetails2).toEqual(SUBNAV_CONFIG.half);
    });

    it('returns config for third if total groups is 3', () => {
      const groupDetails = getConfigType(0, 3);
      const groupDetails2 = getConfigType(1, 3);
      const groupDetails3 = getConfigType(2, 3);
      const groupDetails4 = getConfigType(100, 3);

      expect(groupDetails).toEqual(SUBNAV_CONFIG.third);
      expect(groupDetails2).toEqual(SUBNAV_CONFIG.third);
      expect(groupDetails3).toEqual(SUBNAV_CONFIG.third);
      expect(groupDetails4).toEqual(SUBNAV_CONFIG.third);
    });

    it('returns config for quarter if values are given in any other combo', () => {
      const groupDetails = getConfigType(0, 4);
      const groupDetails2 = getConfigType(3, 4);
      const groupDetails3 = getConfigType(0, 8);
      const groupDetails4 = getConfigType(100, -2);

      expect(groupDetails).toEqual(SUBNAV_CONFIG.quarter);
      expect(groupDetails2).toEqual(SUBNAV_CONFIG.quarter);
      expect(groupDetails3).toEqual(SUBNAV_CONFIG.quarter);
      expect(groupDetails4).toEqual(SUBNAV_CONFIG.quarter);
    });
  });

  // NOTE: getSubNavGroupDetails calls getConfigType, so im not retesting the functionality i've already tested above
  describe('getSubNavGroupDetails', () => {
    it('returns and empty array if groups is empty or has a length > 4', () => {
      const groupDetails = getSubNavGroupDetails([], false);
      const groupDetails2 = getSubNavGroupDetails([], false);

      expect(groupDetails).toEqual([]);
      expect(groupDetails2).toEqual([]);
    });

    it('returns a config object for every item in the groups array', () => {
      const group = { heading: 'test', items: [] };
      const groupDetails = getSubNavGroupDetails([group], false);
      const groupDetail2 = getSubNavGroupDetails([group, group], false);
      const groupDetails3 = getSubNavGroupDetails([group, group, group], false);
      const groupDetails4 = getSubNavGroupDetails(
        [group, group, group, group],
        false,
      );

      expect(groupDetails.length).toEqual(1);
      expect(groupDetail2.length).toEqual(2);
      expect(groupDetails3.length).toEqual(3);
      expect(groupDetails4.length).toEqual(4);
    });

    it('replaces the configs maxItems values with the maxCaptionItem if the items have a "desc" prop', () => {
      const group = {
        heading: 'test',
        items: [{ label: 'sub test', href: '#', desc: 'hello' }],
      };
      const isDropdownMenu = true;
      const groupDetails = getSubNavGroupDetails([group], isDropdownMenu);
      const groupDetail2 = getSubNavGroupDetails(
        [group, group],
        isDropdownMenu,
      );
      const groupDetails3 = getSubNavGroupDetails(
        [group, group, group],
        isDropdownMenu,
      );
      const groupDetails4 = getSubNavGroupDetails(
        [group, group, group, group],
        isDropdownMenu,
      );

      expect(groupDetails[0].maxItem).toEqual(
        SUBNAV_CONFIG.full.maxCaptionItem,
      );
      // where there are 2 groups the first group config is "third", which we are testing in the expect for groupDetails3
      expect(groupDetail2[1].maxItem).toEqual(
        SUBNAV_CONFIG.half.maxCaptionItem,
      );
      expect(groupDetails3[0].maxItem).toEqual(
        SUBNAV_CONFIG.third.maxCaptionItem,
      );
      expect(groupDetails4[0].maxItem).toEqual(
        SUBNAV_CONFIG.quarter.maxCaptionItem,
      );
    });

    it('replaces the configs maxItems values with BURGER_MENU_SUBNAV_MAX_ITEMS if isDropdownMenu is falsy', () => {
      const group = {
        heading: 'test',
        items: [{ label: 'sub test', href: '#', desc: 'hello' }],
      };
      const isDropdownMenu = false;
      const groupDetails = getSubNavGroupDetails([group], isDropdownMenu);
      const groupDetail2 = getSubNavGroupDetails(
        [group, group],
        isDropdownMenu,
      );
      const groupDetails3 = getSubNavGroupDetails(
        [group, group, group],
        isDropdownMenu,
      );
      const groupDetails4 = getSubNavGroupDetails(
        [group, group, group, group],
        isDropdownMenu,
      );

      expect(groupDetails[0].maxItem).toEqual(BURGER_MENU_SUBNAV_MAX_ITEMS);
      expect(groupDetail2[1].maxItem).toEqual(BURGER_MENU_SUBNAV_MAX_ITEMS);
      expect(groupDetails3[0].maxItem).toEqual(BURGER_MENU_SUBNAV_MAX_ITEMS);
      expect(groupDetails4[0].maxItem).toEqual(BURGER_MENU_SUBNAV_MAX_ITEMS);
    });
  });

  describe('extendNavigation', () => {
    const testNav = [
      {
        label: 'Used cars',
        href: '#used-cars',
      },
      {
        label: 'New cars',
        href: '#new-cars',
      },
    ];
    const langItemConfig = {
      currentLang: 'en-EN',
      options: LANG_OPTIONS,
      hide: true,
    };

    it('returns navigation array as is if langItemConfig & accountItemConfig are undefined or hidden', () => {
      const extendedNav = extendNavigation(
        testNav,
        DEFAULT_LOCALE,
        langItemConfig,
        undefined,
      );

      expect(extendedNav).toEqual(testNav);
    });

    it('returns navigation with and extra nav item based of langItemConfig if passed', () => {
      const extendedNav = extendNavigation(
        testNav,
        DEFAULT_LOCALE,
        { ...langItemConfig, hide: false },
        undefined,
      );

      expect(extendedNav).toEqual([
        ...testNav,
        {
          isBurgerMenuOnly: true,
          label: 'Select Language',
          subNavGroups: [
            {
              heading: DEFAULT_LOCALE.langListHeading,
              items: LANG_OPTIONS.map(lang => ({
                href: lang.href,
                label: lang.label,
              })),
            },
          ],
        },
      ]);
    });

    it('returns navigation with and extra nav item based of accountItemConfig if passed', () => {
      const accountOnClick = jest.fn();
      const extendedNav = extendNavigation(testNav, DEFAULT_LOCALE, undefined, {
        label: 'Login',
        onClick: accountOnClick,
      });

      expect(extendedNav).toEqual([
        ...testNav,
        {
          isBurgerMenuOnly: true,
          label: 'Login',
          onClick: accountOnClick,
        },
      ]);
    });
  });
});
