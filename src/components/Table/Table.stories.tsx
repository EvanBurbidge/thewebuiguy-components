// import React from 'react';
// import README from './README.md';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table'
// import { TableRow } from '../TableRow';
// import { TableCell } from '../TableCell';
// import { TableHeader } from '../TableHeader';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;


export const Primary: Story = {
  args: {},
};

