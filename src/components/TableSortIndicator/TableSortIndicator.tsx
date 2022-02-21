import React from 'react';

import SortDescendingIcon from '@heroicons/react/solid/SortDescendingIcon';
import SortAscendingIcon from '@heroicons/react/solid/SortAscendingIcon';

export interface TableSortIndicatorProps {
  direction: string;
  property: string;
  handleDirectionChange(a: any, b: string): void
}

export const TableSortIndicator: React.FC<TableSortIndicatorProps> = ({
  direction,
  property,
  handleDirectionChange,
}: TableSortIndicatorProps) => {
  const handleClick = () => {
    if (direction === 'ASC') {
      return handleDirectionChange(property, 'DESC');
    }
    return handleDirectionChange(property, 'ASC');
  }
  if (direction === 'ASC') {
    return (
      <SortDescendingIcon data-testid="descending" onClick={handleClick} className="w-4 h-4 ml-1 text-xs text-gray-500" />
    )
  }
  return (
    <SortAscendingIcon data-testid="ascending" onClick={handleClick} className="w-4 h-4 ml-1 text-xs text-gray-500" />
  )
}
