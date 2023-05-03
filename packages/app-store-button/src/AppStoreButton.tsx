import React from 'react';

import { getImgProps } from './utils/appStoreButtonHelpers';
import { AppStoreButtonProps } from './AppStoreButton.types';

import styles from './styles/default.module.css';

const AppStoreButton = React.forwardRef<HTMLAnchorElement, AppStoreButtonProps>(
  (
    {
      className,
      store,
      lang,
      dataTestId,
      href,
      theme = 'default',
      ...restProps
    },
    ref,
  ) => {
    const imgProps = getImgProps(store, lang, theme);

    if (imgProps) {
      return (
        <a
          aria-label={imgProps.alt}
          className={`${styles.wrapper} ${
            store === 'apple' ? styles.apple : styles.google
          } ${className || ''}`}
          data-test-id={dataTestId}
          href={href}
          ref={ref}
          rel="nofollow"
          target="_blank"
          {...restProps}
        >
          <img {...imgProps} />
        </a>
      );
    }

    return null;
  },
);

AppStoreButton.displayName = 'AppStoreButton';

export default AppStoreButton;
