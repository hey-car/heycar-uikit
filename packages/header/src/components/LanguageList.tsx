import React, { FC } from 'react';

import Typography from '@heycar-uikit/typography';

import { LANG_OPTIONS } from '../Header.constants';
import { getFlagIcon, itemOnClick } from '../utils/headerItemHelpers';

import { LanguageListProps } from './LanguageList.types';

import styles from '../styles/languageList.module.css';

const LanguageList: FC<LanguageListProps> = ({
  dataTestId,
  heading,
  onHover,
  options = LANG_OPTIONS,
  trackingFn,
}) => {
  return (
    <div
      className={styles.languageList}
      data-test-id={dataTestId}
      onMouseOut={() => onHover(false)}
      onMouseOver={() => onHover(true)}
    >
      <Typography variant="subheading1">{heading}</Typography>
      <ul>
        {options.map(langItem => {
          const Icon = getFlagIcon(langItem.langCode);

          return (
            <li key={langItem.langCode}>
              <a
                href={langItem.href}
                onClick={() =>
                  itemOnClick(
                    `${langItem.label} language select`,
                    trackingFn,
                    langItem.onClick,
                  )
                }
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
};

export default LanguageList;
