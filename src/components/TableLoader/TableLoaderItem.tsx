import React from 'react';
import { TableRow } from '@components/TableRow';
import { TableCell } from '@components/TableCell';
// @ts-ignore
import Styles from './TableLoader.module.scss';

interface TableLoaderProps {
  columns: string[]
}

export const TableLoaderItem: React.FC<TableLoaderProps> = ({ columns }: TableLoaderProps) => (
  <TableRow id="loader-table-row">
    {columns && columns.map((c, idx) => (
      <TableCell key={`${c}-${idx}`}>
        <div className={Styles.loader}>
          &nbsp;
        </div>
      </TableCell>
    ))}
  </TableRow>
);
