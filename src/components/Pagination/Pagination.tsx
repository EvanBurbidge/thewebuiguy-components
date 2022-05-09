import ReactPaginate from 'react-paginate';
import React, { useMemo, useCallback } from 'react';

export interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  disableInitialCallback: boolean;
  initialPage?: number;
  onPageChange: (t: number) => any;
}


const containerClass = "flex justify-center h-auto align-center";
const activeClass = 'cursor-pointer border-highlight text-highlight border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';
const inActiveClass = 'mb-4 cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';

const getPageNumbers = (totalItems: number, itemsPerPage: number): number => Math.ceil((totalItems / itemsPerPage)) >> 0;

export const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange, disableInitialCallback = false, initialPage = 0 }: PaginationProps) => {

  const handleOnPageChange = useCallback(({ selected = 0 }) => onPageChange(selected), [onPageChange]);
  const pageCount = useMemo(() => getPageNumbers(totalItems, itemsPerPage), [totalItems, itemsPerPage]);
  return (
    <ReactPaginate
      initialPage={initialPage}
      pageClassName={inActiveClass}
      activeClassName={activeClass}
      nextClassName={inActiveClass}
      breakClassName={inActiveClass}
      previousClassName={inActiveClass}
      onPageChange={handleOnPageChange}
      containerClassName={containerClass}
      pageRangeDisplayed={10}
      marginPagesDisplayed={4}
      disableInitialCallback={disableInitialCallback}
      pageCount={pageCount}
    />
  );
}
