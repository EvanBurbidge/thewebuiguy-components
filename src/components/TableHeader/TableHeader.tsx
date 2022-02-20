import React from 'react';

export interface TableHeaderProps {
  title: string;
  alignment?: string
  children?: any
  extraClasses?: string
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  title = '',
  alignment = 'left',
  extraClasses,
  children,
}: TableHeaderProps) => {
  return (
    <th scope="col" className={`text-${alignment} px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${extraClasses}`}>
      <span className="flex">
        {title}
        {children}
      </span>
    </th>
  );
}
