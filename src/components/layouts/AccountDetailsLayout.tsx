import React from 'react';

interface AccountDetailsLayoutProps {
  title: string;
  subtitle: string;
  children: any;
}

const AccountDetailsLayout = ({ title, subtitle, children }: AccountDetailsLayoutProps) => (
  <div className="w-full bg-white rounded p-2 md:p-20 flex justify-center flex-col">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-sm mb-4">{subtitle}</p>
    {children}
  </div>
);

export default AccountDetailsLayout;