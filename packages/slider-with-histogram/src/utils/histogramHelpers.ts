import { Point } from '../components/Histogram.types';

const drawCurve = (ctx: CanvasRenderingContext2D, points: Point[]) => {
  // https://stackoverflow.com/a/40978275

  if (points[0]) ctx.moveTo(points[0].x, points[0].y);

  for (let i = 0; i < points.length - 1; i += 1) {
    const xMid = (points[i].x + points[i + 1].x) / 2;
    const yMid = (points[i].y + points[i + 1].y) / 2;
    const cpX1 = (xMid + points[i].x) / 2;
    const cpX2 = (xMid + points[i + 1].x) / 2;

    if (i === 0) {
      ctx.quadraticCurveTo(cpX1, points[i].y, xMid, yMid);
    } else {
      ctx.quadraticCurveTo(cpX1, points[i].y, xMid, yMid);
    }

    ctx.quadraticCurveTo(
      cpX2,
      points[i + 1].y,
      points[i + 1].x,
      points[i + 1].y,
    );
  }
};

const sanitiseRangeIndexes = (
  selectedRangeIndexes: [number, number] | undefined,
  histogramData: number[],
): [number, number] => {
  if (!selectedRangeIndexes) return [0, histogramData.length - 1];
  const sortedIndexes = selectedRangeIndexes.sort((a, b) => a - b);

  const from = Math.min(
    Math.max(sortedIndexes[0], 0),
    histogramData.length - 1,
  );
  const to = Math.min(Math.max(sortedIndexes[1], 0), histogramData.length - 1);

  return [from, to];
};

export { drawCurve, sanitiseRangeIndexes };
