import React from 'react';
import { normalClassMD, activeClassMD } from '@constants/tabs';

interface TitleTab {
  isActive: boolean;
  label: string;
}
interface TitleTabsProps {
  tabs: TitleTab[];
  onClick(label: string): void
}

const getLabelId = (label: string): string => label.toLowerCase().split(' ').join('-');

const TitleTabs = ({
  tabs = [],
  onClick = () => { },
}: TitleTabsProps) => {
  const handleClick = (label: string) => () => onClick(label);
  return (
    <div className="px-4 bg-white">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-8" aria-label="Tabs">
          {tabs.map(({ isActive, label }) => (
            <span data-testid={`${getLabelId(label)}-desktop`} onClick={handleClick(label)} key={label} className={isActive ? activeClassMD : normalClassMD}>
              {label}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default TitleTabs;