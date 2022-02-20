import React from 'react';

import Pagination, { PaginationProps } from '@components/pagination/Pagination';
import TableLoader from './TableLoader';

interface TableProps {
  hasPagination?: boolean;
  tableHeadClass?: string;
  tableBody: any;
  tableHeader: React.ReactElement;
  loading?: boolean;
  columns?: string[];
  totalItems?: number;
  currentPage?: number;
  itemsPerPage?: number;
  onPageChange?: (t: number) => any;
}

const Table = ({
  hasPagination = false,
  tableHeadClass = 'bg-white',
  tableBody,
  tableHeader,
  loading,
  columns = [],
  ...rest
}: TableProps) => loading ? <TableLoader columns={columns} /> : (
  <div className="flex flex-col w-full bg-white rounded-sm">
    <div className="overflow-hidden border-b border-gray-100 shadow ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className={"bg-gray-50"}>
          {tableHeader}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableBody}
        </tbody>
      </table>
      {hasPagination && <Pagination {...rest as PaginationProps} />}
    </div>
  </div>
);

export default Table;