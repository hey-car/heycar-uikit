import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Pagination, PaginationItem } from '@heycar-uikit/pagination';

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
    it('should render 1 item component correctly', () => {
      render(<Pagination currentPage={1} totalPages={1} />);
      expect(screen.queryByText('1')).toBeInTheDocument();
    });

    it('should render all items with correct content', () => {
      render(<Pagination currentPage={5} totalPages={10} />);

      expect(screen.getByTestId('ChevronLeftIcon')).toBeVisible();
      expect(screen.getByTestId('ChevronRightIcon')).toBeVisible();
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
      expect(getByLabelText('Page 5')).toBeVisible();
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

    it('should render correctly custom locale', () => {
      const locale = {
        page: 'Page #{page}',
        goto: 'Go to page #{page}',
        prevPage: 'Previous page',
        nextPage: 'Next page',
      };

      render(<Pagination currentPage={5} locale={locale} totalPages={10} />);
      expect(screen.getByLabelText('Page 5')).toBeInTheDocument();
      expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
      expect(screen.getByLabelText('Next page')).toBeInTheDocument();
      expect(screen.queryByLabelText('Go to page 5')).not.toBeInTheDocument();
      expect(screen.getByLabelText('Go to page 6')).toBeInTheDocument();
    });

    it('should disable buttons in an accessible way', () => {
      const { getByLabelText } = render(
        <Pagination currentPage={1} totalPages={1} />,
      );

      expect(getByLabelText('Go to previous page')).toBeAriaDisabled();
      expect(getByLabelText('Go to next page')).toBeAriaDisabled();
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
