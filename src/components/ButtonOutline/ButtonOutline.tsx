import React from 'react';
import './buttonOutline.scss';

export interface ButtonOutlineProps {}

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
