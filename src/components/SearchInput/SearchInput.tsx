import React from 'react';
import { InputProps, Input } from '@components/Input';



export const SearchInput: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Input {...props} />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
