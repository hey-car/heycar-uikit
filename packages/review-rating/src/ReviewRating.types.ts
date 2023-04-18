import { HTMLAttributes } from 'react';

type ReviewRatingSizes = 'XS' | 'S' | 'M' | 'L';

interface ComponentProps {
  /**
   * Score out of 10. only displays integers
   */
  score: number;
  /**
   * 	ReviewRating display size
   */
  size?: ReviewRatingSizes;
  /**
   * The id for testing
   */
  dataTestId?: string;
}

type ReviewRatingProps = ComponentProps & HTMLAttributes<HTMLDivElement>;

export { ComponentProps, ReviewRatingProps, ReviewRatingSizes };
