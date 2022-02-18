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
}: any ) => {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="mb-3 relative shadow-sm">
        <div className="absolute inset-y-0 left-0 pr-10 flex items-center">
          <select
            id="inputDropdown"
            name="inputDropdown"
            onChange={onDropdownChange}
            value={optionsDefaultValue}
            className="focus:ring-highlight focus:border-highlight h-full py-0 pl-3 pr-7 rounded-r-none border-transparent bg-transparent border-r-gray-100 text-highlight sm:text-sm rounded-sm"
          >
            {options.map((opt:OptionProp ) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
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