import React from 'react';
import TableLoader from './TableLoader';

interface TableLoaderBodyProps {
  columns: string[]
}

export const TableLoaderBody = ({ columns }: TableLoaderBodyProps) => (
  <>
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
    <TableLoader columns={columns} />
  </>
)