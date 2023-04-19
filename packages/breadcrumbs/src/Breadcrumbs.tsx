import React, { FC } from 'react';

import { Breadcrumb, BreadcrumbsProps } from './Breadcrumbs.types';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs, className }) => {
  console.log(breadcrumbs);

  return (
    <ul className={className}>
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, i) => {
          if (breadcrumb.link && i + 1 !== breadcrumbs.length) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${breadcrumb.title}-${i}`}>
                <a href={breadcrumb.link}>
                  <span itemProp="name">{breadcrumb.title}</span>
                </a>
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
