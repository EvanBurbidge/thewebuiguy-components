import React from 'react';
import { TableSortPill, TableSortPillProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableSortPillProps = {
  sortingName: "testing",
  clearSorting: () => { },
};

const setup = (props = defaultProps) => render(<TableSortPill {...props} />);

describe('TableSortPill', () => {
  it('renders', () => {
    setup();
    screen.getByText("testing x");
  });
});
