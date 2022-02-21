import React from 'react';
import { TableHeader, TableHeaderProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TableHeaderProps = {
  title: "table header"
};

const setup = (props = defaultProps) => render(
  <table>
    <thead>
      <tr>
        <TableHeader {...props} />
      </tr>
    </thead>
  </table>
);

describe('TableHeader', () => {
  it('renders', () => {
    setup();
    screen.getByText('table header');
  });
});
