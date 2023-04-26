import React, { useState } from 'react';

import Grid from '@heycar-uikit/grid';
import {
  Call,
  Close,
  Dealer,
  Hamburger,
  HeartDefault,
  Search,
} from '@heycar-uikit/icons';
import Logo from '@heycar-uikit/logo';
import Typography from '@heycar-uikit/typography';

import LanguageList from './components/LanguageList';
import NavigationBurgerMenu from './components/NavigationBurgerMenu';
import NavigationDropdown from './components/NavigationDropdown';
import { useLangList } from './hooks/useLangList';
import {
  getCurrentLang,
  hasHeaderItems,
  itemOnClick,
} from './utils/headerItemHelpers';
import { DEFAULT_LOCALE, MAX_FAVES_DISPLAY_NO } from './Header.constants';
import { HeaderLinkProps, HeaderProps } from './Header.types';

import styles from './styles/default.module.css';

const DefaultLinkComponent = (props: HeaderLinkProps) => <a {...props} />;

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      accountItemConfig,
      auxiliaryDetails,
      callItemConfig,
      dataTestId,
      favoritesItemConfig,
      langItemConfig,
      LinkComponent,
      locale = DEFAULT_LOCALE,
      logoHref,
      navigation,
      searchItemConfig,
      trackingFn,
    },
    ref,
  ) => {
    // State items
    const [isNavTrayOpen, setIsNavTrayOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState<string | undefined>(
      undefined,
    );
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Link component
    const Link = (LinkComponent || DefaultLinkComponent) as (
      props: HeaderLinkProps,
    ) => JSX.Element;

    // Header items
    const { hasSearch, hasFaves, hasLang, hasAccount, hasCall } =
      hasHeaderItems(
        searchItemConfig,
        favoritesItemConfig,
        langItemConfig,
        accountItemConfig,
        callItemConfig,
      );
    const favesCount = favoritesItemConfig!.favoritesNumber || 0;

    // Lang
    const currentLang = hasLang
      ? getCurrentLang(langItemConfig!.currentLang, langItemConfig!.options)
      : undefined;
    const LangIco = currentLang?.icon;
    const { isLangListOpen, keyboardOpen, setIsFocused, setIsHovering } =
      useLangList();

    // Event handlers
    const handleSearchToggle = (newState: boolean) => {
      setIsSearchOpen(newState);
      if (searchItemConfig?.onClick) searchItemConfig.onClick(newState);
    };

    return (
      <header className={styles.header} data-test-id={dataTestId} ref={ref}>
        <Grid.Container className={styles.headerInner}>
          <Grid.Row gutter={{ mobile: 8, tablet: 12, desktop: 24 }}>
            <Grid.Col className={styles.colLeft}>
              <Link
                aria-label={DEFAULT_LOCALE.logoLabel}
                className={styles.logo}
                href={logoHref}
                onClick={() => itemOnClick('Logo', trackingFn)}
              >
                <Logo />
              </Link>
              {hasSearch && (
                <div
                  className={`${styles.searchWrapper} ${
                    isSearchOpen ? styles.active : ''
                  }`}
                >
                  <button
                    aria-label={locale.closeSearchLabel}
                    className={styles.closeSearch}
                    onClick={() => handleSearchToggle(false)}
                  >
                    <Close />
                  </button>
                  {searchItemConfig?.Component}
                </div>
              )}
            </Grid.Col>
            <Grid.Col className={styles.colRight}>
              {/*
               *** Mobile Search Button
               */}
              {hasSearch && (
                <button
                  aria-label={searchItemConfig!.label}
                  className={`${styles.notHorizontalNav} ${styles.item}`}
                  onClick={() => handleSearchToggle(true)}
                >
                  <Search />
                </button>
              )}
              {/*
               *** Favorite Button
               */}
              {hasFaves && (
                <Link
                  aria-label={favoritesItemConfig!.label}
                  className={`${styles.item} ${styles.faves}`}
                  href={favoritesItemConfig!.href}
                  onClick={() =>
                    itemOnClick(
                      favoritesItemConfig!.label,
                      trackingFn,
                      favoritesItemConfig!.onClick,
                    )
                  }
                >
                  <HeartDefault />
                  <span
                    aria-label={locale.favoritesCountLabel}
                    className={`${styles.counter} ${
                      favesCount > 0 ? styles.active : ''
                    }`}
                  >
                    {favesCount > MAX_FAVES_DISPLAY_NO
                      ? MAX_FAVES_DISPLAY_NO
                      : favesCount}
                  </span>
                  <Typography variant="subheading3">
                    {favoritesItemConfig!.label}
                  </Typography>
                </Link>
              )}
              {/*
               *** Lang Select
               */}
              {hasLang && (
                <div className={styles.langWrapper}>
                  <button
                    aria-haspopup="menu"
                    aria-label={`${locale.langListHeading} - ${locale.spaceBarNotification}`}
                    className={`${styles.horizontalNavOnly} ${styles.item} ${
                      isLangListOpen ? styles.focused : ''
                    }`}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onKeyDown={e => keyboardOpen(e)}
                    onMouseOut={() => setIsHovering(false)}
                    onMouseOver={() => setIsHovering(true)}
                  >
                    {LangIco}
                    <Typography variant="subheading3">
                      {currentLang?.shortName}
                    </Typography>
                  </button>
                  {isLangListOpen && (
                    <LanguageList
                      dataTestId="header-language-list"
                      heading={DEFAULT_LOCALE.langListHeading}
                      onFocusEvents={setIsFocused}
                      onHoverEvents={setIsHovering}
                      options={langItemConfig!.options}
                      trackingFn={trackingFn}
                    />
                  )}
                </div>
              )}
              {/*
               *** Account Button
               */}
              {hasAccount && (
                <button
                  aria-label={accountItemConfig!.label}
                  className={`${styles.horizontalNavOnly} ${styles.item}`}
                  onClick={() =>
                    itemOnClick(
                      accountItemConfig!.label,
                      trackingFn,
                      accountItemConfig!.onClick,
                    )
                  }
                >
                  <Dealer />
                  <Typography variant="subheading3">
                    {accountItemConfig!.label}
                  </Typography>
                </button>
              )}
              {/*
               *** Call Button
               */}
              {hasCall && (
                <Link
                  aria-label={callItemConfig!.label}
                  className={`${styles.desktopOnly} ${styles.item} ${styles.asideItem}`}
                  href={callItemConfig!.href}
                  onClick={() =>
                    itemOnClick(
                      callItemConfig!.label,
                      trackingFn,
                      callItemConfig!.onClick,
                    )
                  }
                >
                  <Call />
                  <Typography variant="subheading3">
                    {callItemConfig!.label}
                  </Typography>
                </Link>
              )}
              {/*
               *** Mobile menu Toggle
               */}
              <button
                aria-label={DEFAULT_LOCALE.burgerMenuButtonLabel}
                className={`${styles.notHorizontalNav} ${styles.item}`}
                onClick={() =>
                  itemOnClick('Toggle Menu', trackingFn, () =>
                    setIsNavTrayOpen(!isNavTrayOpen),
                  )
                }
              >
                {isNavTrayOpen ? <Close /> : <Hamburger />}
              </button>
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
        {/*
         *** Navigation
         */}
        <div
          className={`${styles.navWrapper} ${isNavTrayOpen ? 'navOpen' : ''}`}
        >
          <NavigationBurgerMenu
            Link={Link}
            accountItemConfig={accountItemConfig}
            activeNavItem={activeNavItem}
            auxiliaryDetails={auxiliaryDetails}
            currentLang={currentLang?.langCode}
            dataTestId={`${dataTestId}-navigation`}
            langItemConfig={langItemConfig}
            locale={locale}
            navigation={navigation}
            setActiveNavItem={setActiveNavItem}
            trackingFn={trackingFn}
          />
          <NavigationDropdown
            Link={Link}
            activeNavItem={activeNavItem}
            dataTestId={`${dataTestId}-navigation`}
            locale={locale}
            navigation={navigation}
            setActiveNavItem={setActiveNavItem}
            trackingFn={trackingFn}
          />
        </div>
      </header>
    );
  },
);

Header.displayName = 'Header';

export default Header;
