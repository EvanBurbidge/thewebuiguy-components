import React, { Fragment } from 'react';

interface PageTitleProps {
  title: string;
  Dropdown: React.ReactElement;
  Secondary: React.ReactElement;
  Primary: React.ReactElement;
}

const PageTitle = ({
  title = '',
  Dropdown = <Fragment />,
  Primary = <Fragment />,
  Secondary = <Fragment />,
}: PageTitleProps) => (
  <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100 md:items-center">
    <div className="min-w-0">
      <h3 className="text-xl font-semibold leading-7 capitalize text-primary sm:text-base sm:truncate">
        {title}
      </h3>
    </div>
    <div className="hidden md:mt-0 md:ml-4 md:flex">
      {Secondary && Secondary}
      <span className="ml-0 md:ml-2">
        {Primary && Primary}
      </span>
    </div>
    {Dropdown}
  </div>
);

export default PageTitle;