import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DragDots } from './DragDots'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/DragDots',
  component: DragDots,
} as ComponentMeta<typeof DragDots>;

const Template: ComponentStory<typeof DragDots> = (args) => <DragDots />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
};
