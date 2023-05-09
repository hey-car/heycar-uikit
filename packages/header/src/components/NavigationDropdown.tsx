import React from 'react';

import Collapse from '@heycar-uikit/collapse';
import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from '../constants/Header.constants';
import { useNavigationItem } from '../hooks/useNavigationItem';
import { itemOnClick } from '../utils/headerItemHelpers';

import { NavigationProps } from './Navigation.types';
import SubNav from './SubNav';

import styles from '../styles/navigationDropdown.module.css';

const NavigationDropdown = React.forwardRef<HTMLDivElement, NavigationProps>(
  (
    {
      activeNavItem,
      dataTestId,
      Link,
      locale = DEFAULT_LOCALE,
      navigation = [],
      setActiveNavItem,
      trackingFn,
    },
    ref,
  ) => {
    const { toggleSubNav, keyboardOpen, closeSiblings } = useNavigationItem(
      activeNavItem,
      setActiveNavItem,
    );

    return (
      <nav
        className={styles.nav}
        data-nav-type="dropdown-menu"
        data-test-id={dataTestId}
        ref={ref}
        role="navigation"
      >
        <ul aria-label="Main navigation" role="menubar" tabIndex={0}>
          {navigation.map((navItem, i) => {
            const { label, subNavGroups } = navItem;
            const id = `nav-item-${label.replace(/^[^a-z]+|[^\w:.-]+/gi, '')}`;
            const hasSubNav = subNavGroups && subNavGroups?.length > 0;
            const isActive = activeNavItem === id;
            const isLastItem = i + 1 === navigation.length;
            const commonProps = {
              role: 'menuitem',
              className: `${styles.navItem} ${isActive ? styles.isActive : ''}`,
              id,
            };

            return (
              <li
                className={`${isLastItem ? styles.lastNavItem : ''}`}
                key={`dropdown-${label}`}
                onMouseOut={() => toggleSubNav(id, isActive)}
                onMouseOver={() => toggleSubNav(id, isActive, true)}
              >
                {hasSubNav ? (
                  <>
                    <button
                      {...commonProps}
                      aria-expanded={isActive}
                      aria-haspopup={true}
                      aria-label={`${label} - ${locale.spaceBarNotification}`}
                      onClick={() =>
                        itemOnClick(`${label}`, trackingFn, () =>
                          toggleSubNav(id, isActive),
                        )
                      }
                      onFocus={() => closeSiblings(id, hasSubNav)}
                      onKeyDown={e => keyboardOpen(e, id, isActive)}
                    >
                      <Typography variant="button2">{label}</Typography>
                    </button>
                    <Collapse
                      aria-hidden={!isActive}
                      aria-label={`${label} ${locale.subMenuLabel}`}
                      className={styles.collapse}
                      open={isActive}
                    >
                      <SubNav
                        Link={Link}
                        isDropDownMenu={true}
                        isOpen={isActive}
                        locale={locale}
                        navItemId={commonProps.id}
                        navItemName={label}
                        subNavGroups={subNavGroups!}
                        trackingFn={trackingFn}
                      />
                    </Collapse>
                  </>
                ) : (
                  <Link
                    {...commonProps}
                    href={navItem.href}
                    onClick={() => itemOnClick(`${label}`, trackingFn)}
                  >
                    <Typography variant="button2">{label}</Typography>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

export default NavigationDropdown;
