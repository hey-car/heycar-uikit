import React from 'react';

import Typography from '@heycar-uikit/typography';

import { LANG_OPTIONS } from '../constants/Header.constants';
import { useNavigationItem } from '../hooks/useNavigationItem';
import { getFlagIcon } from '../utils/headerItemHelpers';

import { LanguageListProps } from './LanguageList.types';

import styles from '../styles/languageList.module.css';

const LanguageList = React.forwardRef<HTMLDivElement, LanguageListProps>(
  (
    {
      dataTestId,
      heading,
      onFocusEvents,
      onHoverEvents,
      options = LANG_OPTIONS,
      trackingFn,
    },
    ref,
  ) => {
    const { itemOnClick } = useNavigationItem();

    return (
      <div
        className={styles.languageList}
        data-test-id={dataTestId}
        onMouseOut={() => onHoverEvents(false)}
        onMouseOver={() => onHoverEvents(true)}
        ref={ref}
        role="menu"
      >
        <Typography variant="subheading1">{heading}</Typography>
        <ul>
          {options.map(langItem => {
            const Icon = getFlagIcon(langItem.langCode);

            return (
              <li key={langItem.langCode} role="menuitem">
                <a
                  aria-label={`${langItem.label} language select`}
                  href={langItem.href}
                  onBlur={() => onFocusEvents(false)}
                  onClick={() =>
                    itemOnClick(
                      {
                        fn: trackingFn,
                        obj: {
                          label: `${langItem.label} language select`,
                          href: langItem.href,
                        },
                      },
                      langItem.onClick,
                    )
                  }
                  onFocus={() => onFocusEvents(true)}
                >
                  {Icon}
                  <Typography variant="button3">{langItem.label}</Typography>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default LanguageList;
