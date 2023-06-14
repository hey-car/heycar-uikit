interface Point {
  x: number;
  y: number;
}

interface HistogramProps {
  values: number[];
  width: number;
  height: number;
  selectedRangeIndexes?: [number, number];
  normaliseData?: boolean;
  showPoints?: boolean;
  selectedRangeMinWidth?: number;
}

export { HistogramProps, Point };
