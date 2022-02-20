import React from 'react';
import { labelClass } from './Classes';

interface OptionProp {
  value: string;
  label: string;
}

const InputWithDropdown = ({
  id,
  type,
  label,
  value,
  options,
  onValueChange,
  onDropdownChange,
  optionsDefaultValue,
  classNames = '',
}: any) => {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative mb-3 shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pr-10">
          <select
            id="inputDropdown"
            name="inputDropdown"
            onChange={onDropdownChange}
            value={optionsDefaultValue}
            className="h-full py-0 pl-3 bg-transparent border-transparent rounded-sm rounded-r-none focus:ring-highlight focus:border-highlight pr-7 border-r-gray-100 text-highlight sm:text-sm"
          >
            {options.map((opt: OptionProp) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>
        </div>
        <input
          id={id}
          type={type}
          defaultValue={value}
          onChange={onValueChange}
          className={`shadow-sm focus:ring-highlight focus:border-highlight block w-full pl-20 sm:text-sm border border-gray-300 p-1 rounded-sm h-10 ${classNames}`}
        />
      </div>
    </div>
  );
}

export default InputWithDropdown;