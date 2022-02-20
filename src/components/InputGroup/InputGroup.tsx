import React from 'react';

const labelClass = "font-medium text-primary capitalize";
const subtitleClass = "mt-1 text-sm text-primaryHover";

export interface InputGroupProps {
  id: string;
  label: string;
  colSpan?: number | string;
  inputElement: any;
  subtitle?: any;
  required?: boolean;
  extraClasses?: string;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
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
