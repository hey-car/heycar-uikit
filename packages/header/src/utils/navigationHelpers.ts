import { SubNavGroup } from '../components/Navigation.types';
import { SUBNAV_CONFIG } from '../Header.constants';

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
    // this can be changed for a .some Fn but im trying to keep things lightweight for now
    const hasCaption = group.items[0].desc;
    const groupDetails = getConfigType(i, noOfGroups);

    // the max items we can display in a group varies based on the breakpoint, groups width and if the items have captions
    let correctMaxItem = hasCaption
      ? groupDetails.maxCaptionItem
      : groupDetails.maxItem;

    if (!isDropdownMenu) correctMaxItem = 5;

    return {
      ...groupDetails,
      maxItem: correctMaxItem,
    };
  });
};

export { getSubNavGroupDetails };
