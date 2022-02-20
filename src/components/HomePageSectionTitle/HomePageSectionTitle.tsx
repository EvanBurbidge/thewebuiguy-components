import React from 'react';

export interface HomePageSectionTitleProps {
  title: string;
  subtitle?: string
}

export const HomePageSectionTitle: React.FC<HomePageSectionTitleProps> = ({ title, subtitle }: HomePageSectionTitleProps) => {
  return (
    <div className="relative">
      <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}
