import React from 'react';

export interface RadioProps {
  id: string;
  label?: string;
  value?: any;
  subtitle?: string;
  onClick?: (t: any) => void;
  onChange?: any
  checked?: boolean
  disabled?: boolean
}

export const Radio: React.FC<RadioProps> = ({
  id = '',
  label = '',
  subtitle = '',
  value = '',
  checked = false,
  disabled = false,
  onClick,
  ...rest
}: RadioProps) => {
  return (
    <div className="flex items-center my-3">
      <div className="flex items-center justify-center h-7 align-center">
        <input
          id={id}
          type="radio"
          value={value}
          checked={checked}
          onClick={onClick}
          disabled={disabled}
          className="w-4 h-4 border-gray-300 text-primary focus:ring-primary"
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
