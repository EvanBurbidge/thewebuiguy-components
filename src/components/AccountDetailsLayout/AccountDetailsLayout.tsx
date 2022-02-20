import React from 'react';

export interface AccountDetailsLayoutProps {
  title: string;
  subtitle: string;
  children: any;
}

export const AccountDetailsLayout: React.FC<AccountDetailsLayoutProps> = ({
  title,
  subtitle,
  children,
}: AccountDetailsLayoutProps) => (
  <div className="flex flex-col justify-center w-full p-2 bg-white rounded md:p-20">
    <h2 className="mb-2 text-xl font-bold">{title}</h2>
    <p className="mb-4 text-sm">{subtitle}</p>
    {children}
  </div>
);
