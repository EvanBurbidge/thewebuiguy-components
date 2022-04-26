import { useButtonHandlers } from '../hooks/useButtonHandlers';
import React from 'react';

export interface ButtonOutlineProps {
  id: string;
  onClick: any;
  type?: string;
  children: any;
  disabled?: boolean;
  buttonType?: any;
  classNames?: string;
}

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({ id, onClick, type, disabled, buttonType, children, classNames }: ButtonOutlineProps) => {
  const { outlineColors, handleClick } = useButtonHandlers({
    type,
    onClick,
    disabled,
  });
  return (
    <button
      id={id}
      data-testid={id}
      type={buttonType}
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 border border-1 bg-white text-base font-medium rounded shadow-sm focus:outline-none ${outlineColors} ${classNames}`}
    >
      {children}
    </button >
  );
}
