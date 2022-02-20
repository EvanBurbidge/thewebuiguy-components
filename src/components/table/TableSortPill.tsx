import React from 'react';
import { Pill } from '@components/Pill';

interface TableSortPillProps {
  sortingName: string;
  clearSorting(a: any): void
}

export const TableSortPill = ({
  sortingName,
  clearSorting,
}: TableSortPillProps) => (
  <span onClick={clearSorting} className="text-xs cursor-pointer">
    <Pill text={`${sortingName} x`} color="text-primary" bgColor="gray-100 border border-gray-500" />
  </span>
);