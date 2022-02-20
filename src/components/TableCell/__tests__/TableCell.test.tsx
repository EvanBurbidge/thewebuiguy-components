import React from 'react';
import { TableCell, TableCellProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableCellProps = {
  
};

const setup = (props = defaultProps) => render(<TableCell {...props} />);

describe('TableCell', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
