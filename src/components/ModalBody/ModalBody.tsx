import React, { ReactElement } from 'react';

export interface ModalBodyProps {
  Content: ReactElement | string;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ Content }: ModalBodyProps) => (
  <div className="mt-2">
    <p className="text-sm text-gray-500">
      {Content}
    </p>
  </div>
);

