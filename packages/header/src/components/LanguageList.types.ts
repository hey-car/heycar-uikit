import { HeaderTrackingObj, LangOption } from '../Header.types';

interface LanguageListProps {
  /**
   * heading displayed above the list
   */
  heading: string;
  /**
   * optional custom list of languages
   */
  options?: LangOption[];
  /**
   * The id for testing
   */
  dataTestId?: string;
  /**
   * Tracking function to be called with tracking object, onClick for any link or button within the Header
   */
  trackingFn?: (trackingObj: HeaderTrackingObj) => void;
  /**
   * function to be called on moveOver/Out events. Used to keep the list open when being used
   */
  onHoverEvents: (hovering: boolean) => void;
  /**
   * function to be called on focus/blur events. Used to keep the list open when being used
   */
  onFocusEvents: (focused: boolean) => void;
}

export { LanguageListProps };
