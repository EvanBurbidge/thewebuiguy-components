import React from 'react';

import { InputProps } from './interfaces';

export const Input = ({
  id = '',
  type = '',
  defaultValue = '',
  placeholder = '',
  classNames = '',
  disabled = false,
  onChange,
  ...rest
}: InputProps ) => (
  <input
    id={id}
    {...rest}
    type={type}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    defaultValue={defaultValue}
    aria-describedby={`${id}-description`}
    className={`shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border border-gray-300 p-1 rounded-sm h-10 ${classNames}`}
  />
);

export default Input;