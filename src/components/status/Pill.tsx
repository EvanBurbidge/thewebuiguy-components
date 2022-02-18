import React from 'react';

interface PillProps {
  text:string;
  color: string;
  bgColor: string;
}

const Pill = ({
  text = '',
  color = '',
  bgColor = '',
}: PillProps) => (
  <span className={`bg-${bgColor} text-${color} text-center w-1/2 px-2 py-1 font-base text-sm rounded-2xl`}>
    {text}
  </span>
);

export default Pill;