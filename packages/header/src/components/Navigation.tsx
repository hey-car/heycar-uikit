import React from 'react';

import Collapse from '@heycar-uikit/collapse';
import { ChevronDown } from '@heycar-uikit/icons';
import { useBreakpoint } from '@heycar-uikit/themes';
import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from '../Header.constants';
import { useNavigationItem } from '../hooks/useNavigationItem';
import { itemOnClick } from '../utils/headerItemHelpers';

import { NavigationProps } from './Navigation.types';
import SubNav from './SubNav';

import styles from '../styles/navigation.module.css';

const Navigation = React.forwardRef<HTMLDivElement, NavigationProps>(
  (
    {
      activeNavItem,
      auxiliaryDetails: aux,
      currentLang,
      dataTestId,
      Link,
      locale = DEFAULT_LOCALE,
      navigation,
      setActiveNavItem,
      trackingFn,
    },
    ref,
  ) => {
    const hasAuxData = aux?.tel || aux?.email || aux?.app;
    const appLangCode = currentLang ? currentLang.substring(0, 2) : 'en';
    const { toggleSubNav, keyboardOpen, closeSiblings } = useNavigationItem(
      activeNavItem,
      setActiveNavItem,
    );
    const {
      breakpoints: { isTabletL, isDesktopS, isDesktopM, isDesktopL },
    } = useBreakpoint();
    const isDropDownMenu = isTabletL || isDesktopS || isDesktopM || isDesktopL;

    return (
      <nav
        className={styles.nav}
        data-test-id={dataTestId}
        ref={ref}
        role="navigation"
      >
        <ul aria-label="Main navigation" role="menubar" tabIndex={0}>
          {navigation.map((navItem, i) => {
            const { label, subNavGroups } = navItem;
            const id = `nav-item-${label.replace(/ /g, '-')}`;
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
                className={isLastItem ? styles.lastNavItem : ''}
                key={label}
                onMouseOut={() => isDropDownMenu && toggleSubNav(id, isActive)}
                onMouseOver={() =>
                  isDropDownMenu && toggleSubNav(id, isActive, true)
                }
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
                      onFocus={() =>
                        isDropDownMenu && closeSiblings(id, hasSubNav)
                      }
                      onKeyDown={e => keyboardOpen(e, id, isActive)}
                    >
                      <Typography variant="button2">{label}</Typography>
                      <ChevronDown />
                    </button>
                    <Collapse
                      aria-hidden={!isActive}
                      aria-label={`${label} ${locale.subMenuLabel}`}
                      className={styles.collapse}
                      open={isActive}
                    >
                      <SubNav
                        Link={Link}
                        isDropDownMenu={isDropDownMenu}
                        isOpen={isActive}
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
        {hasAuxData && (
          <aside className={styles.auxDetails}>
            {aux?.tel && (
              <p className={styles.auxContact}>
                <Typography variant="caption2">
                  {aux.tel.label || locale.auxTelLabel}
                </Typography>
                <a href={`tel:${aux.tel.value}`}>{aux.tel.value}</a>
              </p>
            )}
            {aux?.email && (
              <p className={styles.auxContact}>
                <Typography variant="caption2">
                  {aux.email.label || locale.auxEmailLabel}
                </Typography>
                <a href={`mailto:${aux.email.value}`}>{aux.email.value}</a>
              </p>
            )}
            {aux.app && (
              <div className={styles.appDetails}>
                <Typography variant="button1">
                  {aux?.app?.heading || locale.auxAppHeading}
                </Typography>
                {aux?.app?.appStoreUrl && (
                  <a
                    href={`${aux?.app?.appStoreUrl}?itsct=apps_box_badge&amp;itscg=30200`}
                  >
                    <img
                      alt="Download on the App Store"
                      src={`https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${appLangCode}-${appLangCode}?size=250x83&amp;releaseDate=1670371200`}
                    />
                  </a>
                )}
                {aux?.app?.playStoreUrl && (
                  <a
                    href={`${aux?.app?.playStoreUrl}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
                  >
                    <img
                      alt="Get it on Google Play"
                      src={`https://play.google.com/intl/en_us/badges/static/images/badges/${appLangCode}_badge_web_generic.png`}
                    />
                  </a>
                )}
              </div>
            )}
          </aside>
        )}
      </nav>
    );
  },
);

export default Navigation;
