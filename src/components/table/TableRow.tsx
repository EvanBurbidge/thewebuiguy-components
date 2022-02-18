import React from 'react';

interface TableRowProps {
  id: string,
  children: React.ReactElement[]
}

const TableRow = ({
  id,
  children,
}: TableRowProps) => (
  <tr key={id} className="py-4 justify-center align-center items-center">
    {children}
  </tr>
);

export default TableRow;