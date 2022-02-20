import React from 'react';
import { TableLoader, TableLoaderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableLoaderProps = {
  
};

const setup = (props = defaultProps) => render(<TableLoader {...props} />);

describe('TableLoader', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
