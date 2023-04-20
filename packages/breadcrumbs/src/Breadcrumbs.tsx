import React, { FC } from 'react';
import cn from 'classnames';

import {
  Breadcrumb,
  BreadcrumbLinkProps,
  BreadcrumbsProps,
} from './Breadcrumbs.types';

import styles from './styles/default.module.css';

const DefaultLink: React.FC<BreadcrumbLinkProps> = ({
  link,
  children,
  ...rest
}) => (
  <a href={link} {...rest}>
    {children}
  </a>
);

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs,
  dataTestId,
  className,
}) => {
  //TODO: LinkComponent
  const Link = DefaultLink as (props: BreadcrumbLinkProps) => JSX.Element;

  return (
    <ul
      className={cn(styles.breadcrumbWrapper, className)}
      data-test-id={dataTestId}
    >
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, i) => {
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
    </ul>
  );
};

export default Breadcrumbs;
export type { Breadcrumb };
