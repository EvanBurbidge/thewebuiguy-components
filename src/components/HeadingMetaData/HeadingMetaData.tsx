import React, { ReactElement } from 'react';

export interface MetaDataItem {
  text: string;
  Icon?: ReactElement
}
export interface HeadingMetaDataProps {
  metaData: MetaDataItem[]
}

export const HeadingMetaData: React.FC<HeadingMetaDataProps> = ({ metaData = [] }: HeadingMetaDataProps) => (
  <div className="flex flex-col mt-1 sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
    {metaData.map(({ text, Icon }: MetaDataItem) => (
      <div className="flex items-center mt-2 text-sm text-gray-500" key={text}>
        {Icon}
        {text}
      </div>
    ))}
  </div>
);
