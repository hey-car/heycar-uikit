import { useCallback, useMemo, useState } from 'react';

const useReviewRating = () => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) =>
          setIsVisible(entries[0].isIntersecting),
        {
          threshold: 1.0,
        },
      ),
    [],
  );

  const setIntersectionObserver = (targetId: string) => {
    const target = document.querySelector(`#${targetId}`);

    if (target) observer.observe(target);
  };

  return {
    isVisible,
    setIntersectionObserver: useCallback(setIntersectionObserver, [observer]),
  };
};

export { useReviewRating };
