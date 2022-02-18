import React from 'react';
import { subtitleClass } from './Classes';

interface CheckboxProps {
  id: string;
  label?: string;
  value?: any;
  subtitle?: string;
  onClick?:(t: any) => void;
  onChange?: any
}

const Checkbox = ({
  id = '',
  label = '',
  subtitle = '',
  value = false,
  onClick,
  ...rest
}: CheckboxProps) => (
  <div className="flex items-center my-3">
    <div className="h-7 flex items-center justify-center align-center">
      <input
        id={id}
        type="checkbox"
        onClick={onClick}
        defaultChecked={value}
        className="focus:ring-primary h-5 w-5 text-primary border-gray-300 rounded"
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

export default Checkbox;