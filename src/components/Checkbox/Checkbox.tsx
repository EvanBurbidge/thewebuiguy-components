import React from 'react';

export interface CheckboxProps {
  id: string;
  label?: string;
  value?: any;
  subtitle?: string;
  onClick?: (t: any) => void;
  onChange?: any
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id = '',
  label = '',
  subtitle = '',
  value = false,
  onClick,
  ...rest
}: CheckboxProps) => {
  return (
    <div className="flex items-center my-3">
      <div className="flex items-center justify-center h-7 align-center">
        <input
          id={id}
          type="checkbox"
          onClick={onClick}
          defaultChecked={value}
          className="w-5 h-5 border-gray-300 rounded focus:ring-primary text-primary"
          {...rest}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className={'capitalize text-primary'}>{label}</label>
        {
          subtitle && <p className="mt-1 text-sm text-primaryHover">
            {subtitle}
          </p>
        }
      </div>
    </div>
  );
}
