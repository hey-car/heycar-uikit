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
  const [isKeyboardToggle, setIsKeyboardToggle] = useState(false);
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

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    setIsLangListOpen(isKeyboardToggle);
  }, [isKeyboardToggle]);

  const keyboardOpen = (
    e: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (e.code === 'Space') {
      e.preventDefault();
      setIsKeyboardToggle(!isKeyboardToggle);
    }
  };

  return {
    isLangListOpen,
    keyboardOpen,
    setIsHoverOnLangBtn,
    setIsHoverOnLangList,
  };
};

export { useLangList };
