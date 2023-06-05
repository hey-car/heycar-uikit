import React from 'react';

import Grid from '@heycar-uikit/grid';
import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from '../constants/Header.constants';
import { getSubNavGroupDetails } from '../utils/navigationHelpers';

import { SubNavProps } from './Navigation.types';

import styles from '../styles/subNav.module.css';

const SubNav = React.forwardRef<HTMLDivElement, SubNavProps>(
  (
    {
      isDropDownMenu,
      isOpen,
      itemOnClick,
      Link,
      locale = DEFAULT_LOCALE,
      navItemId,
      navItemName,
      subNavGroups,
      trackingFn,
    },
    ref,
  ) => {
    const groupDeets = getSubNavGroupDetails(subNavGroups, isDropDownMenu);

    return (
      <Grid.Row
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
        aria-label={`${navItemName} ${locale.subMenuLabel}`}
        className={styles.subNav}
        data-test-id={`${navItemId}-sub-nav`}
        gutter={{
          mobile: 0,
          tablet: { s: 0, m: 0, l: 24 },
          desktop: 24,
        }}
        justify="left"
        ref={ref}
        role="group"
      >
        {subNavGroups.map((subNavGroup, i) => {
          const { showAllLink } = subNavGroup;
          const canShowMoreLink = showAllLink && !showAllLink.hide;
          const { className, colWidth, maxItem } = groupDeets[i];

          return (
            <Grid.Col
              className={`${styles.subNavGroup} ${className}`}
              key={`${isDropDownMenu ? 'dropdown' : 'burger'}-${navItemId}-${
                subNavGroup.heading
              }`}
              role="none"
              width={{
                mobile: 12,
                tablet: { s: 12, m: 12, l: colWidth },
                desktop: colWidth,
              }}
            >
              <span role="separator">{subNavGroup.heading}</span>
              <ul aria-label={`${subNavGroup.heading} menu`} role="menu">
                {subNavGroup.items.slice(0, maxItem).map(subNavItem => {
                  return (
                    <li
                      key={`${
                        isDropDownMenu ? 'dropdown' : 'burger'
                      }-${navItemId}-${subNavGroup.heading}-${
                        subNavItem.label
                      }`}
                      role="none"
                    >
                      <Link
                        className={`${styles.subNavItem} ${
                          subNavItem.desc ? styles.hasCaption : ''
                        }`}
                        href={subNavItem.href}
                        onClick={() =>
                          itemOnClick({
                            fn: trackingFn,
                            obj: {
                              label: `${subNavItem.label}`,
                              parentLabel: navItemName,
                              type: 'subnav_item',
                              href: subNavItem.href,
                              navType: isDropDownMenu
                                ? 'dropdown'
                                : 'burger_menu',
                            },
                          })
                        }
                        role="menuitem"
                        tabIndex={isOpen ? undefined : -1}
                      >
                        <span>{subNavItem.label}</span>
                        {subNavItem.desc && isDropDownMenu ? (
                          <Typography Component="q" variant="body4">
                            {subNavItem.desc}
                          </Typography>
                        ) : undefined}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {canShowMoreLink && (
                <Link
                  className={styles.showAll}
                  href={showAllLink.href}
                  onClick={() =>
                    itemOnClick({
                      fn: trackingFn,
                      obj: {
                        label: `${subNavGroup.heading} ${
                          showAllLink.label || locale.showAllLabel
                        }`,
                        parentLabel: navItemName,
                        type: 'subnav_item',
                        href: showAllLink.href,
                        navType: isDropDownMenu ? 'dropdown' : 'burger_menu',
                      },
                    })
                  }
                  role="menuitem"
                  tabIndex={isOpen ? undefined : -1}
                >
                  {showAllLink.label || locale.showAllLabel}
                </Link>
              )}
            </Grid.Col>
          );
        })}
      </Grid.Row>
    );
  },
);

export default SubNav;
