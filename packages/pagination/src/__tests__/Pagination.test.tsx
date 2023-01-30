import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Pagination, PaginationItem } from '@heycar-uikit/pagination';

import { getItemAriaLabelFunction } from '../Pagination.types';

function setWidthDesktop() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1280,
  });
  global.dispatchEvent(new Event('resize'));
}
function setWidthMobile() {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 240,
  });
  global.dispatchEvent(new Event('resize'));
}

describe('Pagination', () => {
  beforeEach(() => {
    setWidthDesktop();
  });

  describe('Basic rendering', () => {
    it('should render all items with correct content', () => {
      const { getByTestId } = render(
        <Pagination currentPage={5} totalPages={10} />,
      );

      expect(getByTestId('ChevronLeftIcon')).toBeVisible();
      expect(getByTestId('ChevronRightIcon')).toBeVisible();
      expect(screen.queryByText('1')).toBeInTheDocument();
      expect(screen.queryByText('2')).not.toBeInTheDocument();
      expect(screen.queryByText('3')).not.toBeInTheDocument();
      expect(screen.queryByText('4')).toBeInTheDocument();
      expect(screen.queryByText('5')).toBeInTheDocument();
      expect(screen.queryByText('6')).toBeInTheDocument();
      expect(screen.queryByText('7')).not.toBeInTheDocument();
      expect(screen.queryByText('8')).not.toBeInTheDocument();
      expect(screen.queryByText('9')).not.toBeInTheDocument();
      expect(screen.queryByText('10')).toBeInTheDocument();
    });

    it('should render correct pages on mobile', () => {
      setWidthMobile();

      render(<Pagination currentPage={5} totalPages={10} />);

      expect(screen.queryByText('1')).not.toBeInTheDocument();
      expect(screen.queryByText('2')).not.toBeInTheDocument();
      expect(screen.queryByText('3')).not.toBeInTheDocument();
      expect(screen.queryByText('4')).not.toBeInTheDocument();
      expect(screen.queryByText('5')).toBeInTheDocument();
      expect(screen.queryByText('6')).not.toBeInTheDocument();
      expect(screen.queryByText('7')).not.toBeInTheDocument();
      expect(screen.queryByText('8')).not.toBeInTheDocument();
      expect(screen.queryByText('9')).not.toBeInTheDocument();
      expect(screen.queryByText('10')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('should render correct default aria-labels', () => {
      const { getByLabelText } = render(
        <Pagination currentPage={5} totalPages={10} />,
      );

      expect(getByLabelText('Go to previous page')).toBeVisible();
      expect(getByLabelText('Go to next page')).toBeVisible();
      expect(getByLabelText('Go to page 6')).toBeVisible();
      expect(getByLabelText('page 5')).toBeVisible();
    });

    it('should have aria-current on current page', () => {
      render(<Pagination currentPage={5} totalPages={10} />);

      expect(screen.getByText('5').closest('a')).toHaveAttribute(
        'aria-current',
        'true',
      );
      expect(screen.getByText('4').closest('a')).not.toHaveAttribute(
        'aria-current',
        'true',
      );
    });

    it('should render correctly custom generated aria-labels', () => {
      const getItemAriaLabel: getItemAriaLabelFunction = ({
        type,
        page,
        selected,
      }) => {
        if (selected) return 'this is selected';
        if (type === 'previous') return 'previous page';
        if (type === 'next') return 'next page';

        return 'Page number ' + page;
      };

      render(
        <Pagination
          currentPage={5}
          getItemAriaLabel={getItemAriaLabel}
          totalPages={10}
        />,
      );
      expect(screen.getByLabelText('this is selected')).toBeInTheDocument();
      expect(screen.getByLabelText('previous page')).toBeInTheDocument();
      expect(screen.getByLabelText('next page')).toBeInTheDocument();
      expect(screen.queryByLabelText('Page number 5')).not.toBeInTheDocument();
      expect(screen.getByLabelText('Page number 6')).toBeInTheDocument();
    });
  });

  it('should have a custom attribute (aria-label in this case) on pagination root element', () => {
    const testAria = 'testAria';

    render(
      <Pagination aria-label={testAria} currentPage={5} totalPages={10} />,
    );
    expect(screen.getByLabelText(testAria).closest('nav')).toBeInTheDocument();
  });

  describe('interaction', () => {
    it('should call onClick event with correct parms', () => {
      const onClick = jest.fn();

      render(<Pagination currentPage={5} onClick={onClick} totalPages={10} />);

      fireEvent.click(screen.getByText(1));
      expect(onClick).toHaveBeenCalledWith(1);

      fireEvent.click(screen.getByText(10));
      expect(onClick).toHaveBeenCalledWith(10);

      fireEvent.click(screen.getByText(4));
      expect(onClick).toHaveBeenCalledWith(4);

      fireEvent.click(screen.getByText(6));
      expect(onClick).toHaveBeenCalledWith(6);

      fireEvent.click(screen.getByLabelText('Go to previous page'));
      expect(onClick).toHaveBeenCalledWith(4);

      fireEvent.click(screen.getByLabelText('Go to next page'));
      expect(onClick).toHaveBeenCalledWith(6);
    });

    it('should create correct links', () => {
      render(
        <Pagination
          currentPage={5}
          renderItem={item => (
            <PaginationItem href={`this is href ${item.page}`} {...item} />
          )}
          totalPages={10}
        />,
      );

      expect(screen.getByText('1').closest('a')).toHaveAttribute(
        'href',
        'this is href 1',
      );
      expect(screen.getByText('4').closest('a')).toHaveAttribute(
        'href',
        'this is href 4',
      );
      expect(screen.getByText('5').closest('a')).toHaveAttribute(
        'href',
        'this is href 5',
      );
      expect(screen.getByText('6').closest('a')).toHaveAttribute(
        'href',
        'this is href 6',
      );
      expect(screen.getByText('10').closest('a')).toHaveAttribute(
        'href',
        'this is href 10',
      );
      expect(
        screen.getByLabelText('Go to previous page').closest('a'),
      ).toHaveAttribute('href', 'this is href 4');
      expect(
        screen.getByLabelText('Go to next page').closest('a'),
      ).toHaveAttribute('href', 'this is href 6');
    });

    it('should use a custom component as pagination item', () => {
      const MyLink: React.FC<{ link: string }> = ({
        link,
        children,
        ...rest
      }) => {
        return (
          <a href={link} {...rest}>
            {children}
          </a>
        );
      };

      render(
        <Pagination
          currentPage={5}
          renderItem={item => (
            <PaginationItem
              component={MyLink}
              link={'page ' + item.page}
              {...item}
            />
          )}
          totalPages={10}
        />,
      );

      expect(
        screen.getByLabelText('Go to next page').closest('a'),
      ).toHaveAttribute('href', 'page 6');
      expect(screen.getByText('4').closest('a')).toHaveAttribute(
        'href',
        'page 4',
      );
    });
  });
});
