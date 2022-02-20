import React from 'react';
import { TableHeader, TableHeaderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableHeaderProps = {
  
};

const setup = (props = defaultProps) => render(<TableHeader {...props} />);

describe('TableHeader', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
