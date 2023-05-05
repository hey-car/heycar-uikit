import React, { FC, useState } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import useBreakpoint from './hooks/useBreakpoint.hook';
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
  LinkComponent,
  dataTestId,
  className,
}) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [showHiddenBreadcrumbs, setShowHiddenBreadcrumbs] = useState(false);

  const { breakpoints } = useBreakpoint();

  const isMobile = breakpoints.isMobile;

  if (breadcrumbs.length === 0) {
    return null;
  }

  // Link component
  const Link = (LinkComponent || DefaultLink) as (
    props: BreadcrumbLinkProps,
  ) => JSX.Element;

  const firstBreadcrumb = breadcrumbs[0];
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
  const hiddenBreadcrumbs = breadcrumbs.slice(1, -1);

  const toggleHiddenBreadcrumbs = () => {
    setShowHiddenBreadcrumbs(!showHiddenBreadcrumbs);
  };

  return (
    <ul
      className={cn(styles.breadcrumbWrapper, className)}
      data-test-id={dataTestId}
    >
      {firstBreadcrumb?.link ? (
        <li
          className={styles.breadcrumbsList}
          key={`${firstBreadcrumb.title}-${0}`}
        >
          <Link className={styles.breadcrumbLink} link={firstBreadcrumb.link}>
            <span itemProp="name">{firstBreadcrumb.title}</span>
          </Link>
        </li>
      ) : (
        firstBreadcrumb.title && (
          <li className={styles.breadcrumbsList} key={firstBreadcrumb.title}>
            <span itemProp="name">{firstBreadcrumb.title}</span>
          </li>
        )
      )}
      {isMobile && hiddenBreadcrumbs.length > 0 && !showHiddenBreadcrumbs ? (
        <li className={styles.threeDots} onClick={toggleHiddenBreadcrumbs}>
          &#8230;
        </li>
      ) : (
        <>
          {hiddenBreadcrumbs &&
            hiddenBreadcrumbs.map((breadcrumb, i) => {
              if (breadcrumb.link && i + 1 !== breadcrumbs.length) {
                return (
                  <li className={styles.breadcrumbsList} key={`${uuidv4()}`}>
                    <Link
                      className={styles.breadcrumbLink}
                      link={breadcrumb.link}
                    >
                      <span itemProp="name">{breadcrumb.title}</span>
                    </Link>
                  </li>
                );
              }

              return (
                <li className={styles.breadcrumbsList} key={breadcrumb.title}>
                  <span className={styles.disabled} itemProp="name">
                    {breadcrumb.title}
                  </span>
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
          <Link
            className={cn(styles.currentBreadcrumb, styles.breadcrumbLink)}
            link={lastBreadcrumb.link}
          >
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
