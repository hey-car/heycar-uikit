import { SUBNAV_CONFIG } from '../Header.constants';

// Returns config details for each SubNavGroup when given the total number of groups in a subnav
// max groups is 4
const getSubNavGroupDetails = (noOfGroups: number) => {
  if (noOfGroups < 1 || noOfGroups > 4) return [];

  switch (noOfGroups) {
    case 1:
      return [SUBNAV_CONFIG.full];
    case 2:
      return [SUBNAV_CONFIG.third, SUBNAV_CONFIG.half];
    case 3:
      return [SUBNAV_CONFIG.third, SUBNAV_CONFIG.third, SUBNAV_CONFIG.third];
    default:
      return [
        SUBNAV_CONFIG.quarter,
        SUBNAV_CONFIG.quarter,
        SUBNAV_CONFIG.quarter,
        SUBNAV_CONFIG.quarter,
      ];
  }
};

export { getSubNavGroupDetails };
