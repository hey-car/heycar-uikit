import { useEffect, useRef, useState } from 'react';

const CLOSE_TIMEOUT = 300;

const useLangList = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isHoverOnLangBtn, setIsHoverOnLangBtn] = useState<boolean | undefined>(
    undefined,
  );
  const [isHoverOnLangList, setIsHoverOnLangList] = useState<
    boolean | undefined
  >(undefined);
  const [isLangListOpen, setIsLangListOpen] = useState(false);

  useEffect(() => {
    if (isHoverOnLangBtn === false || isHoverOnLangList === false) {
      timer.current = setTimeout(() => {
        setIsLangListOpen(false);
      }, CLOSE_TIMEOUT);
    }

    if (isHoverOnLangBtn || isHoverOnLangList) {
      setIsLangListOpen(true);
      if (timer.current) clearTimeout(timer.current);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isHoverOnLangBtn, isHoverOnLangList]);

  return {
    setIsHoverOnLangBtn,
    setIsHoverOnLangList,
    isLangListOpen,
  };
};

export { useLangList };
