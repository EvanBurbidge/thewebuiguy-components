import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '@components/pagination/Pagination';

export default {
  title: "TheWebUiGuy/Pagination",
  component: Pagination,
  argTypes: { onPageChange: { action: 'clicked' } },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args: any) => <Pagination {...args} />



export const PaginationExample = Template.bind({});
PaginationExample.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: page => console.log(page)
}
