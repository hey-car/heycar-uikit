export interface UseCollapse {
  collapseContent: React.RefObject<HTMLDivElement>;
  collapseStyles: React.CSSProperties;
  handlerTransitionEnd: (event: React.SyntheticEvent) => void;
}
