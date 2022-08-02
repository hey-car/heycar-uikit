function getCollapseStyles(
  collapseContent: React.RefObject<HTMLDivElement>,
  open: boolean,
): React.CSSProperties {
  if (!collapseContent.current) return {};

  if (open) {
    return {
      height: collapseContent.current.scrollHeight + 'px',
    };
  }

  return {
    overflow: 'hidden',
    height: '0',
  };
}

export default getCollapseStyles;
