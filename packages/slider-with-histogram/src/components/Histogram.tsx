import React, { useEffect, useRef } from 'react';

import { drawCurve } from '../utils/histogramHelpers';

import { HistogramProps, Point } from './Histogram.types';

const Histogram = ({
  values = [],
  width,
  height,
  selectedRangeIndexes,
  normaliseData = true,
  showPoints = false,
  selectedRangeMinWidth,
}: HistogramProps) => {
  const cRef = useRef(null);
  const realWidth = width * 2;
  const realHeight = height * 2;

  // waiting for the canvas to get rendered
  useEffect(() => {
    if (values.length && cRef.current) {
      const canvas: HTMLCanvasElement = cRef.current;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

      // ctx is not available when tests run
      if (!ctx) return;

      const maxValue = Math.max(...values);
      const multiplyFactor = realHeight / maxValue;

      let pointsToDraw: Point[] = values.map((value, index) => ({
        x: index,
        y: normaliseData ? value * multiplyFactor : value,
      }));

      // I need to subtract y from the height because the Y axis goes from top to button, while we need the opposite
      pointsToDraw = pointsToDraw.map(({ x, y }) => ({
        x: (realWidth / (values.length - 1)) * x,
        y: realHeight - y,
      }));

      // clearing the canvas
      ctx.clearRect(0, 0, realWidth, realHeight);

      // drawing the full range curve
      ctx.beginPath();
      drawCurve(ctx, pointsToDraw);
      // this is to close the shape
      ctx.lineTo(pointsToDraw[pointsToDraw.length - 1].x, realHeight);
      ctx.lineTo(pointsToDraw[0].x, realHeight);

      ctx.lineWidth = 1;
      ctx.fillStyle = '#A2B7DA';
      ctx.fill();
      ctx.closePath();

      if (showPoints) {
        ctx.strokeStyle = '#052962';
        ctx.beginPath();
        pointsToDraw.forEach(point => {
          ctx.rect(point.x - 1, point.y - 1, 2, 2);
        });
        ctx.stroke();
      }

      if (selectedRangeIndexes) {
        ctx.beginPath();
        const [from, to] = selectedRangeIndexes;

        // slicing the portion of the data we want to highlight
        const selectedRange: Point[] = pointsToDraw.slice(from, to + 1);

        if (selectedRange.length === 1 && selectedRangeMinWidth) {
          //drawing a 2px wide vertical line
          selectedRange.pop();
          selectedRange.push(
            {
              x: pointsToDraw[from].x - selectedRangeMinWidth / 2,
              y: pointsToDraw[from].y,
            },
            {
              x: pointsToDraw[from].x + selectedRangeMinWidth / 2,
              y: pointsToDraw[from].y,
            },
          );
        }

        // drawing the selected range curve
        drawCurve(ctx, selectedRange);

        // this is to close the shape
        if (selectedRange.length) {
          ctx.lineTo(selectedRange[selectedRange.length - 1].x, realHeight);
          ctx.lineTo(selectedRange[0].x, realHeight);
        }

        ctx.fillStyle = '#052962';
        ctx.fill();
        ctx.closePath();
      }
    }
  }, [
    cRef,
    values,
    selectedRangeIndexes,
    selectedRangeMinWidth,
    normaliseData,
    showPoints,
    width,
    height,
    realWidth,
    realHeight,
  ]);

  return (
    <canvas
      data-test-id="histogram"
      height={realHeight}
      ref={cRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      width={realWidth}
    ></canvas>
  );
};

export default Histogram;
