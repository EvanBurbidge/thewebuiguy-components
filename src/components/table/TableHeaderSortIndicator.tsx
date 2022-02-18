import React from 'react';

import SortDescendingIcon from '@heroicons/react/solid/SortDescendingIcon';
import SortAscendingIcon from '@heroicons/react/solid/SortAscendingIcon';

interface TableHeaderSortIndicatorProps {
  direction: string;
  property: string;
  handleDirectionChange(a:any, b:string):void 
}

export const TableHeaderSortIndicator = ({
  direction,
  property,
  handleDirectionChange,
}:TableHeaderSortIndicatorProps) => {
  const handleClick = () => {
    if (direction === 'ASC') {
      return handleDirectionChange(property, 'DESC');
    }
    return handleDirectionChange(property, 'ASC');
  }
  if (direction === 'ASC') {
    return (
      <SortDescendingIcon onClick={handleClick} className="w-4 h-4 text-xs text-gray-500 ml-1"/>
  )
  }
  return (
      <SortAscendingIcon onClick={handleClick} className="w-4 h-4 text-xs text-gray-500 ml-1"/>
  )
}