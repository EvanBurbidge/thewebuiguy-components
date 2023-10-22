import React from 'react';


import { Pagination } from './Pagination'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Pagination',
  component: Pagination,
};

export const Primary = {
  args: {
    totalItems: 50,
    itemsPerPage: 10,
    currentPage: 1,
    onPageChange: (page: number) => console.log(page)
  }
};
