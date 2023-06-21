export interface BreadcrumbLinkProps {
  link?: string;
  className?: string;
  children: React.ReactNode;
  itemProp: string;
}
export interface Breadcrumb {
  link?: string;
  title: string;
}
export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];

  /**
   *  By default, the Breadcrumbs component uses a standard anchor element to build links. However you can pass a custom element to be used for all links.
   */
  LinkComponent?: (props: BreadcrumbLinkProps) => JSX.Element;
  dataTestId?: string;
  className?: string;
}
