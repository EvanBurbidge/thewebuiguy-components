import React from 'react';

interface TableHeaderProps {
  title: string;
  alignment?: string
  children?: any
  extraClasses?: string
}

const TableHeader = ({
  title = '',
  alignment = 'left',
  extraClasses,
  children,
}: TableHeaderProps) => (
  <th scope="col" className={`text-${alignment} px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${extraClasses}`}>
    <span className="flex">
      {title}
      {children}
    </span>
  </th>
);


export default TableHeader;