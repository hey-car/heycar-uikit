import {
  NavigationProps,
  NavItem,
  SubNavGroup,
} from '../components/Navigation.types';
import {
  BURGER_MENU_SUBNAV_MAX_ITEMS,
  LANG_OPTIONS,
  SUBNAV_CONFIG,
} from '../Header.constants';
import { Locale } from '../Header.types';

import { getCurrentLang } from './headerItemHelpers';

const getConfigType = (groupIndex: number, totalGroups: number) => {
  if (totalGroups === 1) return SUBNAV_CONFIG.full;
  if (totalGroups === 2 && groupIndex > 0) return SUBNAV_CONFIG.half;
  if (totalGroups === 3 || (totalGroups === 2 && groupIndex === 0))
    return SUBNAV_CONFIG.third;

  return SUBNAV_CONFIG.quarter;
};

// Returns config details for each SubNavGroup when given the total number of groups in a subnav
// max groups is 4
const getSubNavGroupDetails = (
  groups: SubNavGroup[],
  isDropdownMenu: boolean,
) => {
  const noOfGroups = groups.length;

  if (noOfGroups < 1 || noOfGroups > 4) return [];

  return groups.map((group, i) => {
    // NOTE: this makes an assumption that if there are going to be descriptions, all items in the list will have them.
    // This is a limitation of the design
    const hasCaption = group.items[0]?.desc;
    const groupDetails = getConfigType(i, noOfGroups);

    // the max items we can display in a group varies based on the breakpoint, groups width and if the items have captions
    let correctMaxItem = hasCaption
      ? groupDetails.maxCaptionItem
      : groupDetails.maxItem;

    if (!isDropdownMenu) correctMaxItem = BURGER_MENU_SUBNAV_MAX_ITEMS;

    return {
      ...groupDetails,
      maxItem: correctMaxItem,
    };
  });
};

// in Burger menu mode (mobile) some of the header items are moved into the navigation
// this function takes the header item data and adds it to the navigation array in the correct format
const extendNavigation = (
  navigation: NavItem[],
  locale: Locale,
  langItemConfig?: NavigationProps['langItemConfig'],
  accountItemConfig?: NavigationProps['accountItemConfig'],
): NavItem[] => {
  const extendedNav = [...navigation];

  if (langItemConfig && !langItemConfig.hide) {
    const langOptions = langItemConfig.options || LANG_OPTIONS;
    const currentLang = getCurrentLang(langItemConfig.currentLang, langOptions);
    const items = langOptions.map(lang => ({
      href: lang.href,
      label: lang.label,
    }));

    const langListNavItem: NavItem = {
      isBurgerMenuOnly: true,
      label: currentLang?.label || locale.langListHeading,
      subNavGroups: [
        {
          heading: locale.langListHeading,
          items,
        },
      ],
    };

    extendedNav.push(langListNavItem);
  }

  if (accountItemConfig && !accountItemConfig.hide) {
    const accountListNavItem: NavItem = {
      isBurgerMenuOnly: true,
      label: accountItemConfig.label,
      onClick: accountItemConfig.onClick,
    };

    extendedNav.push(accountListNavItem);
  }

  return extendedNav;
};

export { extendNavigation, getConfigType, getSubNavGroupDetails };
