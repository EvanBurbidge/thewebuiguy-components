import React from 'react';
import classNames from 'classnames';

export interface ButtonProps {
  id: string;
  onClick: any;
  type?: string;
  children: any,
  disabled?: boolean,
  buttonType?: any
  classNames?: string
}

export const Button: React.FC<ButtonProps> = ({ id, onClick, type = 'primary', children, disabled, buttonType, classNames: extraClasses }: ButtonProps) => {
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
      className={classNames(
        `inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded shadow-sm focus:outline-none ${extraClasses}`,
        {
          'bg-error hover:bg-errorHover text-white': type === 'error',
          'bg-success hover:bg-successHover text-white': type === 'success',
          'bg-secondary hover:bg-secondaryHover text-white': type === 'secondary',
          'bg-warning hover:bg-warningHover text-white': type === 'warning',
          'bg-primary hover:bg-primaryHover text-white': type === 'primary'

        }
      )}
    >
      {children}
    </button >
  );
}
