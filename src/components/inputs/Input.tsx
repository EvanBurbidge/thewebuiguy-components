import React, { useMemo } from 'react';
import { BASE_INPUT_CLASS_NAME } from '@constants/InputClassNames';


interface InputProps {
  id: string;
  name: string;
  label: string;
  type: string;
  helpText?: string;
  errorText?: string;
  placeholder?: string;
  onChange(e: any): any;
  innerClassNames?: string,
  defaultValue?: string;
}

export const Input = ({
  id,
  name,
  type,
  label,
  onChange,
  helpText,
  errorText,
  placeholder,
  innerClassNames,
  defaultValue,
}: InputProps) => {

  const inputClassNames = useMemo(() => {
    const classes = innerClassNames ? innerClassNames : BASE_INPUT_CLASS_NAME;
    if (errorText) {
      return `${classes} border-1 border-red-400`
    }
    return classes;
  }, [innerClassNames, errorText]);

  return (
    <div className="mb-3">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          type={type}
          name={name}
          data-testid={id}
          placeholder={placeholder}
          className={inputClassNames}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
      {helpText && !errorText && (
        <p className="mt-2 text-sm text-gray-500" id={`${id}-description`}>
          {helpText}
        </p>
      )}
      {errorText && (
        <p className="mt-2 text-sm text-red-500" id={`${id}-description`}>
          {errorText}
        </p>
      )}
    </div>
  )
}