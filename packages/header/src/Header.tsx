import React, { FC, useState } from 'react';

import Grid from '@heycar-uikit/grid';
import {
  Call,
  Close,
  Dealer,
  Hamburger,
  HeartDefault,
  HeartFilled,
  Search,
} from '@heycar-uikit/icons';
import Logo from '@heycar-uikit/logo';
import Typography from '@heycar-uikit/typography';

import LanguageList from './components/LanguageList';
import { useLangList } from './hooks/useLangList';
import { getCurrentLang, itemOnClick } from './utils/headerItemHelpers';
import { DEFAULT_LOCALE } from './Header.constants';
import { HeaderProps } from './Header.types';

import styles from './styles/default.module.css';

const DefaultLinkComponent: FC = props => <a {...props} />;

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      accountItemConfig,
      callItemConfig,
      dataTestId,
      favoritesItemConfig,
      langItemConfig,
      LinkComponent,
      logoHref,
      searchItemConfig,
      trackingFn,
    },
    ref,
  ) => {
    const [isNavTrayOpen, setIsNavTrayOpen] = useState(false);
    const Link = LinkComponent || DefaultLinkComponent;
    const canShowSearch = searchItemConfig && !searchItemConfig.hide;
    const canShowFaves = favoritesItemConfig && !favoritesItemConfig.hide;
    const canShowLang = langItemConfig && !langItemConfig.hide;
    const canShowAccount = accountItemConfig && !accountItemConfig.hide;
    const canShowCall = callItemConfig && !callItemConfig.hide;
    const currentLang = langItemConfig
      ? getCurrentLang(langItemConfig?.currentLang, langItemConfig?.options)
      : undefined;
    const LangIco = currentLang?.icon;

    const { isLangListOpen, setIsHoverOnLangBtn, setIsHoverOnLangList } =
      useLangList();

    return (
      <header className={styles.header} data-test-id={dataTestId} ref={ref}>
        <Grid.Container>
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
              {canShowSearch && (
                <div className={styles.searchWrapper}>
                  {searchItemConfig?.Component}
                </div>
              )}
            </Grid.Col>
            <Grid.Col className={styles.colRight}>
              {/*
               *** Mobile Search Button
               */}
              {canShowSearch && (
                <button
                  className={`${styles.notHorizontalNav} ${styles.item}`}
                  onClick={searchItemConfig.onClick}
                >
                  <Search />
                </button>
              )}
              {/*
               *** Favorite Button
               */}
              {canShowFaves && (
                <Link
                  className={styles.item}
                  href={favoritesItemConfig.href}
                  onClick={() =>
                    itemOnClick(
                      favoritesItemConfig.label,
                      trackingFn,
                      favoritesItemConfig.onClick,
                    )
                  }
                >
                  {favoritesItemConfig.favoritesNumber ? (
                    <HeartFilled />
                  ) : (
                    <HeartDefault />
                  )}
                  <Typography variant="subheading3">
                    {favoritesItemConfig.label}
                  </Typography>
                </Link>
              )}
              {/*
               *** Lang Select
               */}
              {canShowLang && (
                <button
                  className={`${styles.horizontalNavOnly} ${styles.item}`}
                  onMouseOut={() => setIsHoverOnLangBtn(false)}
                  onMouseOver={() => setIsHoverOnLangBtn(true)}
                >
                  {LangIco}
                  <Typography variant="subheading3">
                    {currentLang?.shortName}
                  </Typography>
                </button>
              )}
              {/*
               *** Account Button
               */}
              {canShowAccount && (
                <button
                  className={`${styles.horizontalNavOnly} ${styles.item}`}
                  onClick={() =>
                    itemOnClick(
                      accountItemConfig.label,
                      trackingFn,
                      accountItemConfig.onClick,
                    )
                  }
                >
                  <Dealer />
                  <Typography variant="subheading3">
                    {accountItemConfig.label}
                  </Typography>
                </button>
              )}
              {/*
               *** Call Button
               */}
              {canShowCall && (
                <Link
                  className={`${styles.desktopOnly} ${styles.item} ${styles.asideItem}`}
                  href={callItemConfig.href}
                  onClick={() =>
                    itemOnClick(
                      callItemConfig.label,
                      trackingFn,
                      callItemConfig.onClick,
                    )
                  }
                >
                  <Call />
                  <Typography variant="subheading3">
                    {callItemConfig.label}
                  </Typography>
                </Link>
              )}
              {/*
               *** Mobile menu Toggle
               */}
              <button
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
        {isLangListOpen && (
          <LanguageList
            dataTestId="header-language-list"
            heading={DEFAULT_LOCALE.langListHeading}
            onHover={setIsHoverOnLangList}
            trackingFn={trackingFn}
          />
        )}
      </header>
    );
  },
);

Header.displayName = 'Header';

export default Header;
