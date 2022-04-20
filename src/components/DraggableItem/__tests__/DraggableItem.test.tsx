import React from 'react';
import { DraggableItem, DraggableItemProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: DraggableItemProps = {
  drag: React.createRef(),
  value: "test",
  description: "Some description",
  isDragging: false,
  disabled: false,
  isSelected: false,
  handleItemClick: () => {}
};

const setup = (props = defaultProps) => render(<DraggableItem {...props} />);

describe('DraggableItem', () => {
  it('renders', () => {
    setup();
    screen.getByText('Some description');
  });
});
