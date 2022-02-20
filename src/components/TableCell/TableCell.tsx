import React, { Fragment } from 'react';

export interface TableCellProps {
  title?: string;
  subtitle?: string;
  alignment?: string;
  children?: any
}

export const TableCell: React.FC<TableCellProps> = ({
  title,
  subtitle,
  alignment = 'left',
  children = <Fragment />,
}: TableCellProps) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <div className={`flex flex-col items-${alignment} text-${alignment}`}>
        {children && children}
        {title && <div className="text-base font-medium text-primary">
          {title}
        </div>}
        {subtitle && <div className="text-sm text-gray-500">
          {subtitle}
        </div>}
      </div>
    </td>
  );
}
