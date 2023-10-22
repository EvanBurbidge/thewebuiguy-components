import React from 'react';


import { DraggableItem, DraggableItemProps } from './DraggableItem'

const drag = React.createRef();

const baseProps: DraggableItemProps = {
  drag,
  value: "test",
  description: "Some description",
  isDragging: false,
  disabled: false,
  isSelected: false,
  handleItemClick: () => { }

}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/DraggableItem',
  component: DraggableItem,
};

const Template: any = (args: any) => <DraggableItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  ...baseProps
};
