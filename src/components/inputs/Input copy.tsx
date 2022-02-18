import React from 'react';

const Input = ({
  id = '',
  type = '',
  value = '',
  placeholder = '',
  classNames = '',
  disabled = false,
  onChange,
  ...rest
}: any ) => (
  <input
    id={id}
    {...rest}
    type={type}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    aria-describedby={`${id}-description`}
    className={`shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border border-gray-300 p-1 rounded-sm h-10 ${classNames}`}
  />
);

export default Input;