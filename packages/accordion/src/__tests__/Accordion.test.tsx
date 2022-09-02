import React from 'react';
import { render } from '@testing-library/react';

import Accordion from '../Accordion';

const dataTestId = 'test-id';
const accordionTitle = 'title';
const headerRoleAttribute = 'button';
const bodyRoleAttribute = 'region';
const accordionBodyText =
  ' You’ll struggle to find any objective reasons to buy a Q3 Sportback over the standard Audi Q3. But, if you want to stand out, the Sportback is';

describe('Accordion', () => {
  /**
   * Attributes tests
   */
  describe('Attributes tests', () => {
    it('should set `data-test-id` attribute', () => {
      const { getByTestId } = render(
        <Accordion dataTestId={dataTestId} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );

      expect(getByTestId(dataTestId).tagName).toBe('DIV');
    });

    it('should set all default ARIA attributes for open=false title', () => {
      const { getByText } = render(
        <Accordion dataTestId={dataTestId} open={false} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const title = getByText(accordionTitle);
      const ariaExpandedAttr = title.getAttribute('aria-expanded');
      const dataAccordionComponentAttr = title.getAttribute(
        'data-accordion-component',
      );
      const roleAttr = title.getAttribute('role');
      const tabIndexAttr = title.getAttribute('tabIndex');

      expect(ariaExpandedAttr).toBe('false');
      expect(dataAccordionComponentAttr).toBe('AccordionItemButton');
      expect(roleAttr).toBe(headerRoleAttribute);
      expect(tabIndexAttr).toBe('0');
    });

    it('should set all default ARIA attributes for collapse', () => {
      const { getByRole } = render(
        <Accordion dataTestId={dataTestId} open={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const collapse = getByRole(bodyRoleAttribute);
      const dataAccordionComponentAttr = collapse.getAttribute(
        'data-accordion-component',
      );
      const roleAttr = collapse.getAttribute('role');

      expect(dataAccordionComponentAttr).toBe('AccordionItemPanel');
      expect(roleAttr).toBe(bodyRoleAttribute);
    });

    it('should forward ref to accordion', () => {
      const textareaRef = jest.fn();
      const { getByTestId } = render(
        <Accordion
          dataTestId={dataTestId}
          ref={textareaRef}
          title={accordionTitle}
        >
          {accordionBodyText}
        </Accordion>,
      );

      expect(textareaRef.mock.calls).toEqual([[getByTestId(dataTestId)]]);
    });

    it('should set `tabindex=-1` for default state', () => {
      const { getByRole } = render(
        <Accordion
          dataTestId={dataTestId}
          disabled={true}
          title={accordionTitle}
        >
          {accordionBodyText}
        </Accordion>,
      );
      const title = getByRole(headerRoleAttribute);
      const titleTabindex = title.getAttribute('tabindex');

      expect(titleTabindex).toBe('-1');
    });
    it('should set `aria-expanded=true` for open=true state', () => {
      const { getByRole } = render(
        <Accordion dataTestId={dataTestId} open={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const title = getByRole(headerRoleAttribute);
      const ariaExpandedAttr = title.getAttribute('aria-expanded');

      expect(ariaExpandedAttr).toBe('true');
    });
  });

  /**
   * Classes tests
   */
  describe('Classes tests', () => {
    it('should set `className` class', () => {
      const className = 'test-class';
      const { container } = render(
        <Accordion
          className={className}
          dataTestId={dataTestId}
          title={accordionTitle}
        >
          {accordionBodyText}
        </Accordion>,
      );

      expect(container.firstElementChild).toHaveClass(className);
    });

    it('should set `open` class', () => {
      const { getByRole, container } = render(
        <Accordion open={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const header = getByRole(headerRoleAttribute);

      expect(container.firstElementChild).toHaveClass('accordionOpen');
      expect(header).toHaveClass('headerOpen');
    });

    it('should set `default` class for the header', () => {
      const { getByRole } = render(
        <Accordion open={true} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const header = getByRole(headerRoleAttribute);

      expect(header).toHaveClass('header');
      expect(header).toHaveClass('headerOpen');
    });
  });

  /**
   * Custom component
   */
  describe('Custom component', () => {
    it('should use custom component', () => {
      const cb = jest.fn();

      cb.mockReturnValue(null);

      render(
        <Accordion
          Component={cb}
          dataTestId={dataTestId}
          title={accordionTitle}
        >
          {accordionBodyText}
        </Accordion>,
      );

      expect(cb).toBeCalled();

      const props = cb.mock.calls[0][0];

      expect(props['data-test-id']).toBe(dataTestId);
    });
  });

  describe('Render tests', () => {
    test('should contain title', () => {
      const { container, getByRole } = render(
        <Accordion dataTestId={dataTestId} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const title = getByRole(headerRoleAttribute);

      expect(container.firstElementChild).toContainElement(title);
    });

    test('should contain body text', () => {
      const { container, getByRole } = render(
        <Accordion dataTestId={dataTestId} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );
      const body = getByRole(bodyRoleAttribute);

      expect(container.firstElementChild).toContainElement(body);
    });
    it('should unmount without errors', () => {
      const { unmount } = render(
        <Accordion dataTestId={dataTestId} title={accordionTitle}>
          {accordionBodyText}
        </Accordion>,
      );

      expect(unmount).not.toThrowError();
    });
  });
});
