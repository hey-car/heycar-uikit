import React from 'react';

import Collapse from '@heycar-uikit/collapse';
import { ChevronDown, Dealer } from '@heycar-uikit/icons';
import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from '../constants/Header.constants';
import { useNavigationItem } from '../hooks/useNavigationItem';
import { itemOnClick } from '../utils/headerItemHelpers';
import { extendNavigation } from '../utils/navigationHelpers';

import { NavigationProps } from './Navigation.types';
import SubNav from './SubNav';

import styles from '../styles/navigationBurgerMenu.module.css';

const NavigationBurgerMenu = React.forwardRef<HTMLDivElement, NavigationProps>(
  (
    {
      accountItemConfig,
      activeNavItem,
      auxiliaryDetails: aux,
      dataTestId,
      langItemConfig,
      Link,
      locale = DEFAULT_LOCALE,
      navigation = [],
      setActiveNavItem,
      trackingFn,
    },
    ref,
  ) => {
    const hasAuxData = aux?.tel || aux?.email || aux?.app;

    const { toggleSubNav, keyboardOpen } = useNavigationItem(
      activeNavItem,
      setActiveNavItem,
    );

    const extendedNavArray = extendNavigation(
      navigation,
      locale,
      langItemConfig,
      accountItemConfig,
    );

    return (
      <nav
        className={styles.nav}
        data-nav-type="burger-menu"
        data-test-id={dataTestId}
        ref={ref}
        role="navigation"
      >
        <ul aria-label="Main navigation" role="menubar" tabIndex={0}>
          {extendedNavArray.map((navItem, i) => {
            const { label, subNavGroups } = navItem;
            const id = `burger-nav-item-${label.replace(
              /^[^a-z]+|[^\w:.-]+/gi,
              '',
            )}`;
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
                className={`${isLastItem ? 'lastNavItem' : ''} ${
                  navItem.isBurgerMenuOnly ? styles.headerItems : ''
                }`}
                key={`burger-${label}`}
                role="none"
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
                      onKeyDown={e => keyboardOpen(e, id, isActive)}
                    >
                      <Typography variant="subheading3">{label}</Typography>
                      <ChevronDown />
                    </button>
                    <Collapse
                      aria-hidden={!isActive}
                      aria-label={`${label} ${locale.subMenuLabel}`}
                      className={styles.collapse}
                      open={isActive}
                      role="group"
                    >
                      <SubNav
                        Link={Link}
                        isDropDownMenu={false}
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
                    onClick={() =>
                      itemOnClick(`${label}`, trackingFn, navItem.onClick)
                    }
                  >
                    <Typography variant="subheading3">{label}</Typography>
                    {label === accountItemConfig?.label ? (
                      <Dealer />
                    ) : undefined}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        {hasAuxData && (
          <aside className={styles.auxDetails}>
            {aux?.tel && (
              <p className={styles.auxContact}>
                <Typography Component="span" variant="caption2">
                  {aux.tel.label || locale.auxTelLabel}
                </Typography>
                <a href={`tel:${aux.tel.value}`}>{aux.tel.value}</a>
              </p>
            )}
            {aux?.email && (
              <p className={styles.auxContact}>
                <Typography Component="span" variant="caption2">
                  {aux.email.label || locale.auxEmailLabel}
                </Typography>
                <a href={`mailto:${aux.email.value}`}>{aux.email.value}</a>
              </p>
            )}
          </aside>
        )}
      </nav>
    );
  },
);

export default NavigationBurgerMenu;
