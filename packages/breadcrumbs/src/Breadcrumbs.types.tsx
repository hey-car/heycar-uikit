export interface BreadcrumbLinkProps {
  link?: string;
  children: React.ReactNode;
}
export interface Breadcrumb {
  link?: string;
  title: string;
}
export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  dataTestId?: string;
  className?: string;
}
