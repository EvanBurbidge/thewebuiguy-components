import React from 'react';
import { TableSortIndicator, TableSortIndicatorProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableSortIndicatorProps = {
  
};

const setup = (props = defaultProps) => render(<TableSortIndicator {...props} />);

describe('TableSortIndicator', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
