import { useButtonHandlers } from '@hooks/useButtonHandlers';
import React from 'react';

export interface ButtonProps {
  id: string;
  onClick: any;
  type?: string;
  children: any,
  disabled?: boolean,
  buttonType?: any
}

export const Button: React.FC<ButtonProps> = ({ id, onClick, type, children, disabled, buttonType }: ButtonProps) => {
  const { solidColors, handleClick } = useButtonHandlers({
    type, disabled, onClick
  });

  return (
    <button
      id={id}
      data-testid={id}
      type={buttonType}
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded shadow-sm focus:outline-none ${solidColors}`}
    >
      {children}
    </button >
  );
}
