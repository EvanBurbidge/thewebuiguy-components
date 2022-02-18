import React from 'react';
import { subtitleClass, labelClass } from './Classes'
import { InputGroupProps } from './interfaces';

const InputGroup = ({
  id = '',
  label = '',
  colSpan = 4,
  subtitle = '',
  required = false,
  inputElement = '',
  hasError = false,
  errorMessage = '',
  extraClasses = '',
}: InputGroupProps) => {
  const wrapperClassName = `sm:col-span-${colSpan} mb-4`;
  return (
    <div className={`${wrapperClassName} ${extraClasses}`}>
      <label htmlFor={id} className={labelClass}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1">
        {inputElement}
      </div>
      {subtitle && !hasError && <p className={`${subtitleClass} mt-0`}>
        {subtitle}
      </p>}
      {hasError && <p className={`${subtitleClass} mt-0 text-error`}>{errorMessage}</p>}
    </div>
  );
}

export default InputGroup;