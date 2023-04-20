import classNames from 'classnames';
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

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({ id, onClick, type = 'primary', disabled, buttonType, children, classNames: extraClasses }: ButtonOutlineProps) => {

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  }
  return (
    <button
      id={id}
      data-testid={id}
      type={buttonType}
      onClick={handleClick}
      className={classNames(`inline-flex items-center px-4 py-2 border border-1 bg-white text-base font-medium rounded shadow-sm focus:outline-none ${extraClasses}`, {
        'border-gray-300 hover:border-gray-400 text-gray-600': disabled,
        'border-error hover:border-errorHover text-error': type === 'error',
        'border-success hover:border-successHover text-success': type === 'success',
        'border-secondary hover:border-secondaryHover text-secondary': type === 'secondary',
        'border-warning hover:border-warningHover text-warning': type === 'warning',
        'border-primary hover:border-primaryHover text-secondary': type === 'primary',
      })}
    >
      {children}
    </button >
  );
}
