import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from './Table'
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table
  tableHeader={
    <TableRow id="header">
      <TableHeader title="header-one" />
      <TableHeader title="header-two" />
      <TableHeader title="header-three" />
    </TableRow>
  }
  tableBody={
    <TableRow id="header">
      <TableCell title="header-one" subtitle="testing subtitle" />
      <TableCell title="header-two" subtitle="testing subtitle" />
      <TableCell title="header-three" subtitle="testing subtitle" />
    </TableRow>
  }
/>;

export const Primary = Template.bind({});
Primary.args = {}

