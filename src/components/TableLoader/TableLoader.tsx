import React from 'react';
import { TableLoaderItem } from './TableLoaderItem';

export interface TableLoaderProps {
  columns: string[]
}

export const TableLoader: React.FC<TableLoaderProps> = ({ columns }: TableLoaderProps) => (
  <>
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
    <TableLoaderItem columns={columns} />
  </>
)