import React from 'react';

interface TextareaProps {
  id: string;
  defaultValue?: string;
  rows?: number;
  onChange:(t:any) => any;
}

const Textarea = ({
  id,
  defaultValue,
  onChange,
  rows = 3
}: TextareaProps) => (
  <textarea
    id={id}
    name={id}
    rows={rows}
    onChange={onChange}
    defaultValue={defaultValue}
    className="block w-full shadow-sm focus:ring-highlight focus:border-highlight sm:text-sm border-gray-300 rounded-sm"
  />
);

export default Textarea;