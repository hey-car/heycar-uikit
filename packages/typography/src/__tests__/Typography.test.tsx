import React from 'react';
import { render } from '@testing-library/react';

import Typography from '../Typography';

const pangram = 'The quick brown fox jumps over the lazy dog.';

describe('Typography', () => {
  describe('General tests', () => {
    it('should set `variant`', () => {
      const { container } = render(
        <Typography variant="h.1">{pangram}</Typography>,
      );

      expect(container.firstElementChild).toHaveClass('typography__h_1');
    });

    it('should set `highlighted`', () => {
      const { container } = render(
        <Typography highlighted={true} variant="h.1">
          {pangram}
        </Typography>,
      );

      expect(container.firstElementChild).toHaveClass('typography__highlight');
    });

    it('should have correct html tag', () => {
      const { container } = render(
        <Typography customTag="span" variant="h.1">
          {pangram}
        </Typography>,
      );

      const originalHtmlElement = container.querySelector('h1');
      const newHtmlElement = container.querySelector('span');

      expect(originalHtmlElement).toBeNull();
      expect(newHtmlElement).toHaveTextContent(pangram);
    });
  });
  describe('DOM generation tests', () => {
    it('should have correct heading tag', () => {
      const { container } = render(
        <Typography variant="h.1">{pangram}</Typography>,
      );

      const htmlElement = container.querySelector('h1');

      expect(htmlElement).toHaveTextContent(pangram);
    });

    it('should have correct body tag', () => {
      const { container } = render(
        <Typography variant="body.1">{pangram}</Typography>,
      );

      const htmlElement = container.querySelector('p');

      expect(htmlElement).toHaveTextContent(pangram);
    });

    it('should have correct display tag', () => {
      const { container } = render(
        <Typography variant="display.1">{pangram}</Typography>,
      );

      const htmlElement = container.querySelector('p');

      expect(htmlElement).toHaveTextContent(pangram);
    });

    it('should have correct caption tag', () => {
      const { container } = render(
        <Typography variant="caption.1">{pangram}</Typography>,
      );

      const htmlElement = container.querySelector('caption');

      expect(htmlElement).toHaveTextContent(pangram);
    });

    it('should have correct span tag', () => {
      const { container } = render(
        <Typography variant="overline.1">{pangram}</Typography>,
      );

      const htmlElement = container.querySelector('span');

      expect(htmlElement).toHaveTextContent(pangram);
    });
  });
});
