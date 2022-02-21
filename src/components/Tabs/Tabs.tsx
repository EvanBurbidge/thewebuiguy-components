import React from 'react';

export interface TitleTab {
  isActive: boolean;
  label: string;
}
export interface TabsProps {
  tabs: TitleTab[];
  onClick(label: string): void
}


export const normalClassMD = 'border-transparent capitalize cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
export const activeClassMD = 'border-highlight capitalize cursor-pointer text-highlight whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';

const getLabelId = (label: string): string => label.toLowerCase().split(' ').join('-');

export const Tabs: React.FC<TabsProps> = ({ tabs, onClick }: TabsProps) => {
  const handleClick = (label: string) => () => onClick(label);
  return (
    <div className="px-4 bg-white">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8" aria-label="Tabs">
          {tabs.map(({ isActive, label }) => (
            <span
              key={label}
              onClick={handleClick(label)}
              data-testid={`${getLabelId(label)}-desktop`}
              className={isActive ? activeClassMD : normalClassMD}
            >
              {label}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
