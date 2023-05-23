import { useEffect, useRef, useState } from 'react';

const CLOSE_TIMEOUT = 300;

type boolOrUnset = boolean | undefined;

const useLangList = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isHovering, setIsHovering] = useState<boolOrUnset>(undefined);
  const [isFocused, setIsFocused] = useState<boolOrUnset>(undefined);
  const [isKeyboardToggle, setIsKeyboardToggle] = useState(false);
  const [isLangListOpen, setIsLangListOpen] = useState(false);

  useEffect(() => {
    if (isHovering === false || isFocused === false) {
      timer.current = setTimeout(() => {
        setIsLangListOpen(false);
      }, CLOSE_TIMEOUT);
    }

    if (isHovering) {
      setIsLangListOpen(true);
      if (timer.current) clearTimeout(timer.current);
    }

    if (isFocused && timer.current) {
      clearTimeout(timer.current);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [isFocused, isHovering]);

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
    setIsHovering,
    setIsFocused,
    setIsLangListOpen,
  };
};

export { useLangList };
