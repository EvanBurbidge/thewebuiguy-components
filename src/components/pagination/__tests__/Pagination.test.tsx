import React from 'react';
import { Pagination, PaginationProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: PaginationProps = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: page => console.log(page)
};

const setup = (props = defaultProps) => render(<Pagination {...props} />);

describe('Pagination', () => {
  it('renders', () => {
    setup();
    screen.getByText('1');
    screen.getByText('2');
    screen.getByText('3');
    screen.getByText('4');
    screen.getByText('5');
  });
});
