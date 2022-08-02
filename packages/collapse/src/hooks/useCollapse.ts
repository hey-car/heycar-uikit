import React, { useEffect, useState } from 'react';

import getCollapseStyles from '../utils/getCollapseStyles';

import { UseCollapse } from './UseCollapse.types';

function useCollapse(open: boolean): UseCollapse {
  const collapseContent = React.useRef<HTMLDivElement>(null);
  const [collapseStyles, setCollapseStyles] = useState<React.CSSProperties>({});
  const setExpandedStyle = () => {
    if (open)
      setCollapseStyles(styles => ({
        ...styles,
        height: 'auto',
        overflow: 'visible',
      }));
  };
  const setCollapsedStyle = () =>
    setCollapseStyles(styles => ({
      ...styles,
      height: collapseContent.current?.scrollHeight + 'px',
    }));
  const handlerTransitionEnd = setExpandedStyle;

  useEffect(() => {
    const styles = getCollapseStyles(collapseContent, open);

    if (!open) setCollapsedStyle();

    const animationFrameId = window.requestAnimationFrame(() =>
      setTimeout(setCollapseStyles, 0, styles),
    );

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [open]);

  // Only for the first initialization
  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() =>
      setTimeout(() => {
        setCollapseStyles(styles => ({
          ...styles,
          overflow: open ? 'visible' : 'hidden',
        }));
      }, 0),
    );

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return {
    collapseContent,
    collapseStyles,
    handlerTransitionEnd,
  };
}

export default useCollapse;
