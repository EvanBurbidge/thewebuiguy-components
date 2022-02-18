import React from 'react';

interface SelectOption {
  value: any;
  label: string;
}

interface SelectProps {
  onChange(e: any): void;
  options: SelectOption[];
  value?: any;
  autocomplete?: string;
  id: string;
}

const Select = ({
  id,
  value,
  options,
  autocomplete,
  onChange,
}: SelectProps) => (
  <select
    id={id}
    name={id}
    value={value}
    onChange={onChange}
    autoComplete={autocomplete}
    className="shadow-sm focus:ring-highlight focus:border-highlight h-10 block w-full sm:text-sm border-gray-200 rounded-sm">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
  </select>
);

export default Select;