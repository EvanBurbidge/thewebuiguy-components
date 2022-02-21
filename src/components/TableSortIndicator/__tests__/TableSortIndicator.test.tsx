import React from 'react';
import { TableSortIndicator, TableSortIndicatorProps } from '..';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps: TableSortIndicatorProps = {
  direction: "ASC",
  property: "test",
  handleDirectionChange: () => { },
};

const setup = (props = defaultProps) => render(<TableSortIndicator {...props} />);

describe('TableSortIndicator', () => {
  it('renders', async () => {
    const { rerender } = setup();
    screen.getByTestId("descending");
    await fireEvent.click(screen.getByTestId("descending"));
    rerender(<TableSortIndicator direction="DESC" property="test" handleDirectionChange={() => { }} />)
    screen.getByTestId("ascending");
  });
});
