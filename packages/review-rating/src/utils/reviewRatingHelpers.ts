import {
  ARROW_DIFF_DEG,
  MAX_CIRCLE_POINT,
  MAX_SCORE,
} from '../ReviewRating.constants';

const getParsedScore = (score: number) => {
  let parsedScore = Number.isNaN(score) ? 0 : Math.round(score);

  if (parsedScore < 0) parsedScore = 0;
  if (parsedScore > MAX_SCORE) parsedScore = MAX_SCORE;

  return parsedScore;
};

const getPositionData = (score: number) => {
  return {
    arrowRotation: (score / MAX_SCORE) * ARROW_DIFF_DEG,
    donutStrokeLength: (score / MAX_SCORE) * MAX_CIRCLE_POINT,
  };
};

export { getParsedScore, getPositionData };
