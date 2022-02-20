import React from 'react';
import TableRow from './TableRow';
import TableCell from './TableCell';
// @ts-ignore
import Styles from './TableLoader.module.css';

interface TableLoaderProps {
  columns: string[]
}

const TableLoader = ({ columns }: TableLoaderProps) => (
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

export default TableLoader;