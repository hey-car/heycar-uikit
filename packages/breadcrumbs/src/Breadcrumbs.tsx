import React, { FC, useState } from 'react';
import cn from 'classnames';

import {
  Breadcrumb,
  BreadcrumbLinkProps,
  BreadcrumbsProps,
} from './Breadcrumbs.types';

import styles from './styles/default.module.css';

const DefaultLink: React.FC<BreadcrumbLinkProps> = ({
  link,
  className,
  children,
  ...rest
}) => (
  <a className={className} href={link} {...rest}>
    {children}
  </a>
);

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs,
  dataTestId,
  className,
}) => {
  if (breadcrumbs.length === 0) {
    return null;
  }

  const Link = DefaultLink as (props: BreadcrumbLinkProps) => JSX.Element;

  const firstBreadcrumb = breadcrumbs[0];
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  const hiddenBreadcrumbs = breadcrumbs.slice(1, -1);

  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/naming-convention
  const [showHiddenBreadcrumbs, setShowHiddenBreadcrumbs] = useState(false);

  const toggleHiddenBreadcrumbs = () => {
    setShowHiddenBreadcrumbs(!showHiddenBreadcrumbs);
  };

  return (
    <ul
      className={cn(styles.breadcrumbWrapper, className)}
      data-test-id={dataTestId}
    >
      {firstBreadcrumb?.link ? (
        <li key={`${firstBreadcrumb.title}-${0}`}>
          <Link link={firstBreadcrumb.link}>
            <span itemProp="name">{firstBreadcrumb.title}</span>
          </Link>
        </li>
      ) : (
        firstBreadcrumb.title && (
          <li key={firstBreadcrumb.title}>
            <span itemProp="name">{firstBreadcrumb.title}</span>
          </li>
        )
      )}
      {window.innerWidth < 768 &&
      hiddenBreadcrumbs.length > 0 &&
      !showHiddenBreadcrumbs ? (
        <li className={styles.threeDots} onClick={toggleHiddenBreadcrumbs}>
          &#8230;
        </li>
      ) : (
        <>
          {hiddenBreadcrumbs &&
            hiddenBreadcrumbs.map((breadcrumb, i) => {
              if (breadcrumb.link && i + 1 !== breadcrumbs.length) {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={`${breadcrumb.title}-${i}`}>
                    <Link link={breadcrumb.link}>
                      <span itemProp="name">{breadcrumb.title}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li key={breadcrumb.title}>
                  <span itemProp="name">{breadcrumb.title}</span>
                </li>
              );
            })}
        </>
      )}
      {lastBreadcrumb?.link ? (
        <li
          className={styles.currentBreadcrumb}
          key={`${lastBreadcrumb.title}-${breadcrumbs.length - 1}`}
        >
          <Link className={styles.currentBreadcrumb} link={lastBreadcrumb.link}>
            <span itemProp="name">{lastBreadcrumb.title}</span>
          </Link>
        </li>
      ) : (
        lastBreadcrumb.title && (
          <li key={lastBreadcrumb.title}>
            <span className={styles.currentBreadcrumb} itemProp="name">
              {lastBreadcrumb.title}
            </span>
          </li>
        )
      )}
    </ul>
  );
};

export default Breadcrumbs;
export type { Breadcrumb };
