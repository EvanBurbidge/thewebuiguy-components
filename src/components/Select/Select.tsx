import React from 'react';


export interface SelectOption {
  value: any;
  label: string;
}

export interface SelectProps {
  onChange(e: any): void;
  options: SelectOption[];
  value?: any;
  autocomplete?: string;
  id: string;
}


export const Select: React.FC<SelectProps> = ({
  id,
  value,
  options,
  autocomplete,
  onChange,
}: SelectProps) => {
  return (
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      autoComplete={autocomplete}
      className="block w-full h-10 border-gray-200 rounded-sm shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm">
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
