import React from 'react';
import { Input } from './Input';
import { InputProps } from './interfaces'


const SearchInput = (props: InputProps) => (
  <div>
    <div className="mt-1 relative rounded-md shadow-sm">
      <Input {...props} />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  </div>
);

export default SearchInput;