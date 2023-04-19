export interface Breadcrumb {
  link?: string;
  title: string;
}
export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
}
