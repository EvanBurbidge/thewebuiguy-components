import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '@components/table/Table';
import TableRow from '@components/table/TableRow';
import TableCell from '@components/table/TableCell';
import TableHeader from '@components/table/TableHeader';

export default {
  title: "TheWebUiGuy/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: any) => (
  <Table
    tableHeader={
      <TableRow id="table-header-row">
        <TableHeader title='header one' />
        <TableHeader title='header two' />
        <TableHeader title='header three' />
      </TableRow>
    }
    tableBody={
      <TableRow id="table-row">
        <TableCell title="table cell one" subtitle="table cell subtitle one"></TableCell>
        <TableCell title="table cell two" subtitle="table cell subtitle two"></TableCell>
        <TableCell>
          Table cell three with children
        </TableCell>
      </TableRow>
    }
    columns={["one", "two", "three"]}
  />
)



export const TableExample = Template.bind({});
TableExample.args = {
  loading: true,
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: () => { }
}


export const TableWithPagination = Template.bind({});
TableWithPagination.args = {
  hasPagination: true,
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  onPageChange: () => { }
}
