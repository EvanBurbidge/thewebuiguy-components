import React from 'react';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';

interface TableLoaderProps {
  columns: string[]
}

export const TableLoaderItem: React.FC<TableLoaderProps> = ({ columns }: TableLoaderProps) => (
  <TableRow id="loader-table-row">
    {columns && columns.map((c, idx) => (
      <TableCell key={`${c}-${idx}`}>
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '6px',
          backgroundColor: '#e2e8f0',
        }}>
          &nbsp;
        </div>
      </TableCell>
    ))}
  </TableRow>
);
