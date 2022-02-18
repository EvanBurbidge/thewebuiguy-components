import React from 'react';
import { subtitleClass } from './Classes';

interface CheckboxProps {
  id: string;
  label?: string;
  value?: any;
  subtitle?: string;
  onClick?:(t: any) => void;
  onChange?: any
  checked?: boolean
  disabled?: boolean
}

const Radio = ({
  id = '',
  label = '',
  subtitle = '',
  value = '',
  checked = false,
  disabled = false,
  onClick,
  ...rest
}: CheckboxProps) => (
  <div className="flex items-center my-3">
    <div className="h-7 flex items-center justify-center align-center">
      <input
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onClick={onClick}
        disabled={disabled}
        className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
        {...rest}
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className={'capitalize text-primary'}>{label}</label>
      {
      subtitle && <p className={subtitleClass}>
        {subtitle}
      </p>
      }
    </div>
  </div>
);

export default Radio;