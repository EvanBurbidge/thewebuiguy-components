import React from 'react';

export interface InputProps {
  id: string;
  type?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean
  onBlur?: any;
  onChange?: any;
  classNames?: string;
}

export const Input: React.FC<InputProps> = ({
  id = '',
  type = '',
  defaultValue = '',
  placeholder = '',
  classNames = '',
  disabled = false,
  onChange,
  ...rest
}: InputProps) => {
  return (
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
}
