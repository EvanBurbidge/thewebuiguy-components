import React from 'react';

export interface TextAreaProps {
  id: string;
  defaultValue?: string;
  rows?: number;
  onChange: (t: any) => any;
  classNames?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  defaultValue,
  onChange,
  rows = 3,
  classNames = ''
}: TextAreaProps) => {
  return (
    <textarea
      id={id}
      name={id}
      rows={rows}
      data-testid={id}
      onChange={onChange}
      defaultValue={defaultValue}
      className={`shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border border-gray-300 p-1 rounded-sm ${classNames}`}
    />
  );
}
