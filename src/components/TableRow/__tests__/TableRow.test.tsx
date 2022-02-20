import React from 'react';
import { TableRow, TableRowProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableRowProps = {
  
};

const setup = (props = defaultProps) => render(<TableRow {...props} />);

describe('TableRow', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
