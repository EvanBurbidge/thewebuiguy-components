import React from 'react';
import { TableCell, TableCellProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableCellProps = {
  title: "title",
  subtitle: "subtitle",
};

const setup = (props = defaultProps) => render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);

describe('TableCell', () => {
  it('renders', () => {
    setup();
    screen.getByText('title');
    screen.getByText('subtitle');
  });
});
