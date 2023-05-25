import { useCallback, useEffect, useMemo, useState } from 'react';

const useReviewRating = () => {
  const [hasIntersectionObserver, setHasIntersectionObserver] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const observer = useMemo(() => {
    if (hasIntersectionObserver) {
      return new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) =>
          setIsVisible(entries[0].isIntersecting),
        {
          threshold: 1.0,
        },
      );
    }

    return undefined;
  }, [hasIntersectionObserver]);

  const setIntersectionObserver = (targetId: string) => {
    const target = document.querySelector(`#${targetId}`);

    if (target && observer?.observe) observer.observe(target);
  };

  useEffect(() => {
    const hasIntObs = !!window && 'IntersectionObserver' in window;

    setHasIntersectionObserver(hasIntObs);
  }, []);

  return {
    isVisible,
    setIntersectionObserver: useCallback(setIntersectionObserver, [observer]),
  };
};

export { useReviewRating };
