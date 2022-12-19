export interface PaginationProps {
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * `totalPages` - total number of pages
   */
  totalPages: number;
  /**
   * `currentPage` - current page
   */
  currentPage: number;
  /**
   * `url` - Current complete URL of the page
   */
  url?: string;
  /**
   * `scrollToElementId` - To which element ID should we build our URL so auto scroll works?
   */
  scrollToElementId?: string;
}
