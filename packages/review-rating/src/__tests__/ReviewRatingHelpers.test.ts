/* eslint-disable @typescript-eslint/ban-ts-comment */

import { getParsedScore, getPositionData } from '../utils/reviewRatingHelpers';

describe('reviewRatingHelpers', () => {
  describe('getParsedScore', () => {
    it('returns 0 if value passed is NaN', () => {
      // @ts-ignore
      const result = getParsedScore();
      // @ts-ignore
      const result2 = getParsedScore('string');
      // @ts-ignore
      const result3 = getParsedScore(null);

      expect(result).toEqual(0);
      expect(result2).toEqual(0);
      expect(result3).toEqual(0);
    });

    it('returns 0 if value is < 0', () => {
      const result = getParsedScore(-1);

      expect(result).toEqual(0);
    });

    it('returns 10 if value is > 10', () => {
      const result = getParsedScore(25);

      expect(result).toEqual(10);
    });

    it('returns a number rounded to the nearest int if value is a decimal', () => {
      const result = getParsedScore(1.3);
      const result2 = getParsedScore(5.5);

      expect(result).toEqual(1);
      expect(result2).toEqual(6);
    });

    it('returns the value as is if its an int between 0 and 10', () => {
      const result = getParsedScore(7);

      expect(result).toEqual(7);
    });
  });

  describe('getPositionData', () => {
    it('calculates arrowRotation as (score / MAX_SCORE) * ARROW_DIFF_DEG', () => {
      const result = getPositionData(5);
      const result2 = getPositionData(8);

      expect(result.arrowRotation).toEqual(136.5);
      expect(result2.arrowRotation).toEqual(218.4);
    });

    it('calculates donutStrokeLength as (score / MAX_SCORE) * MAX_CIRCLE_POINT', () => {
      const result = getPositionData(5);
      const result2 = getPositionData(8);

      expect(result.donutStrokeLength).toEqual(40.25);
      expect(result2.donutStrokeLength).toEqual(64.4);
    });
  });
});
