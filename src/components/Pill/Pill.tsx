import React from 'react';

export interface PillProps {
  text: string;
  color: string;
  bgColor: string;
}

export const Pill: React.FC<PillProps> = ({ bgColor, color, text }: PillProps) => {
  return (
    <span className={`bg-${bgColor} text-${color} text-center w-fit px-2 py-1 font-base text-sm rounded-2xl`}>
      {text}
    </span>
  );
}
