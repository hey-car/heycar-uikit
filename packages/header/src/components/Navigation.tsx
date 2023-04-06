import React from 'react';

import Collapse from '@heycar-uikit/collapse';
import { ChevronDown } from '@heycar-uikit/icons';
import Typography from '@heycar-uikit/typography';

import { DEFAULT_LOCALE } from '../Header.constants';
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

    return (
      <nav
        className={styles.nav}
        data-test-id={dataTestId}
        ref={ref}
        role="navigation"
      >
        <ul aria-label="Main navigation" role="menubar" tabIndex={0}>
          {navigation.map(navItem => {
            const id = `nav-item-${navItem.label.replace(/ /g, '-')}`;
            const hasSubNav = navItem.subNavGroups?.length;
            const isActive = activeNavItem === id;
            const commonProps = {
              role: 'menuitem',
              className: `${styles.navItem} ${isActive ? styles.isActive : ''}`,
              id,
            };

            const toggleSubNav = (forceId?: string) => {
              const activeId = forceId
                ? forceId
                : isActive
                ? undefined
                : commonProps.id;

              setActiveNavItem(activeId);
            };

            const keyboardOpen = (
              e: React.KeyboardEvent<HTMLButtonElement>,
            ) => {
              if (e.code === 'Space') {
                e.preventDefault();
                toggleSubNav();
              }
            };

            return (
              <li
                key={navItem.label}
                onMouseOut={() => toggleSubNav()}
                onMouseOver={() => toggleSubNav(commonProps.id)}
              >
                {hasSubNav ? (
                  <>
                    <button
                      {...commonProps}
                      aria-expanded={isActive}
                      aria-haspopup={true}
                      aria-label={`${navItem.label} - ${locale.spaceBarNotification}`}
                      onClick={() =>
                        itemOnClick(
                          `${navItem.label}`,
                          trackingFn,
                          toggleSubNav,
                        )
                      }
                      onKeyDown={e => keyboardOpen(e)}
                    >
                      <Typography variant="button2">{navItem.label}</Typography>
                      <ChevronDown />
                    </button>
                    <Collapse
                      aria-hidden={!isActive}
                      aria-label={`${navItem.label} ${locale.subMenuLabel}`}
                      className={styles.collapse}
                      open={isActive}
                    >
                      <SubNav
                        Link={Link}
                        isOpen={isActive}
                        navItemId={commonProps.id}
                        navItemName={navItem.label}
                        subNavGroups={navItem.subNavGroups!}
                        trackingFn={trackingFn}
                      />
                    </Collapse>
                  </>
                ) : (
                  <Link
                    {...commonProps}
                    href={navItem.href}
                    onClick={() => itemOnClick(`${navItem.label}`, trackingFn)}
                  >
                    <Typography variant="button2">{navItem.label}</Typography>
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
