/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useReviewRating } from './hooks/useReviewRating';
import { getParsedScore, getPositionData } from './utils/reviewRatingHelpers';
import {
  ARROW_START_DEG,
  DONUT_DASH_LENGTH,
  MAX_CIRCLE_POINT,
  MAX_SCORE,
} from './ReviewRating.constants';
import { ReviewRatingProps } from './ReviewRating.types';

import styles from './styles/default.module.css';

const ReviewRating = React.forwardRef<HTMLDivElement, ReviewRatingProps>(
  ({ className, score = 0, size = 'S', dataTestId, ...restProps }, ref) => {
    const elementId = restProps.id || `rr-${uuidv4()}`;

    delete restProps.id;

    const { isVisible, setIntersectionObserver } = useReviewRating();
    const parsedScore = getParsedScore(score);
    const { arrowRotation, donutStrokeLength } = getPositionData(parsedScore);

    useEffect(() => {
      setIntersectionObserver(elementId);
    }, []);

    return (
      <div
        aria-label="Rating"
        className={`${styles[size.toLowerCase()]} ${
          styles.wrapper
        } ${className}`}
        data-test-id={dataTestId}
        id={elementId}
        ref={ref}
        {...restProps}
      >
        {/* Background gradient image */}
        <svg
          className={styles.background}
          fill="none"
          viewBox="0 0 176 177"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="88"
            cy="88.75"
            fill="url(#paint0_linear_16561_735)"
            r="88"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_16561_735"
              x1="44"
              x2="143"
              y1="16.4643"
              y2="165.75"
            >
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
        {/* Indicator arrow */}
        <svg
          className={styles.arrow}
          fill="none"
          height="12"
          style={
            isVisible
              ? { transform: `rotate(${ARROW_START_DEG + arrowRotation}deg)` }
              : {}
          }
          viewBox="0 0 12 12"
          width="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.408276 11.5864L11.7165 10.8571L6.69399 0.699226L0.408276 11.5864Z"
            fill="#164CA3"
          />
        </svg>
        {/* Inner circle with rating */}
        <div
          aria-label={`${parsedScore} / ${MAX_SCORE}`}
          className={styles.plainCircle}
        >
          <span className={styles.completeScore}>
            <span className={styles.score}>{parsedScore}</span>
            <span className={styles.max}>{`/${MAX_SCORE}`}</span>
          </span>
        </div>
        {/* Score donut */}
        <svg className={styles.donut} key={`donut-${size}`} viewBox="0 0 42 42">
          <circle
            className={`${styles.scoreCircleTrack}`}
            cx="21"
            cy="21"
            fill="transparent"
            r="17"
            strokeLinecap="round"
            style={{
              strokeDasharray: `${MAX_CIRCLE_POINT}, ${DONUT_DASH_LENGTH}`,
            }}
          />
          <circle
            className={`${styles.scoreCircle} ${
              isVisible ? styles.active : ''
            }`}
            cx="21"
            cy="21"
            fill="transparent"
            r="17"
            strokeLinecap="round"
            style={{
              strokeDasharray: `${
                isVisible ? donutStrokeLength : '0'
              }, ${DONUT_DASH_LENGTH}`,
            }}
          />
        </svg>
      </div>
    );
  },
);

ReviewRating.displayName = 'ReviewRating';

export default ReviewRating;
