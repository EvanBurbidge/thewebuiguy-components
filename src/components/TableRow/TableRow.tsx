import React from 'react';

interface TableRowProps {
  id: string,
  children: React.ReactElement[]
}

export const TableRow: React.FC<TableRowProps> = ({
  id,
  children,
}: TableRowProps) => (
  <tr key={id} className="items-center justify-center py-4 align-center">
    {children}
  </tr>
);