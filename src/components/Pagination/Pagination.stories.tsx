import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from './Pagination'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: page => console.log(page)
};
