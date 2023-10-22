import React from 'react';


import { Pagination } from './Pagination'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Pagination',
  component: Pagination,
};

const Template: any = (args: any) => <Pagination {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: (page: number) => console.log(page)
};
