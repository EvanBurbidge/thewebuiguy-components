import React, { useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

const containerClass = "flex justify-center h-auto align-center";
const activeClass = 'cursor-pointer border-highlight text-highlight border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';
const inActiveClass = 'mb-4 cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium';

export interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (t: number) => any;
}

const getPageNumbers = (totalItems:number, itemsPerPage:number): number => Math.ceil((totalItems / itemsPerPage)) >> 0;

const Pagination = ({
  totalItems = 0,
  currentPage = 1,
  itemsPerPage = 10,
  onPageChange = () => { },
}: PaginationProps) => {
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    setPageCount(getPageNumbers(totalItems, itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handleOnPageChange = ({ selected = 0 }) => onPageChange(selected)
  return (
    <ReactPaginate
      initialPage={currentPage}
      pageClassName={inActiveClass}
      activeClassName={activeClass}
      nextClassName={inActiveClass}
      breakClassName={inActiveClass}
      previousClassName={inActiveClass}
      onPageChange={handleOnPageChange}
      containerClassName={containerClass}
      pageRangeDisplayed={10}
      marginPagesDisplayed={4}
      pageCount={pageCount}
    />
  )
}

export default Pagination