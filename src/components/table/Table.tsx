import React from 'react';

import Pagination, { PaginationProps } from '@components/pagination/Pagination';

interface TableProps {
  hasPagination?: boolean;
  tableHeadClass?: string;
  tableBody: any;
  tableHeader: React.ReactElement;
  loading?: boolean;
}

const Table = ({
  hasPagination = false,
  tableHeadClass = 'bg-white',
  tableBody,
  tableHeader,
  loading,
  ...rest
}: TableProps ) => (
  <div className="flex flex-col bg-white w-full rounded-sm">
    <div className="shadow overflow-hidden border-b border-gray-100 ">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className={"bg-gray-50"}>
          {tableHeader}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tableBody}
        </tbody>
      </table>
      {hasPagination && <Pagination {...rest as PaginationProps } />}
    </div>
  </div>
);

export default Table;