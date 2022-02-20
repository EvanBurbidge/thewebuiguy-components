import React from 'react';
import './button.scss';

export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }:ButtonProps) => {
  return (
    <div>{ children }</div>
  );
}
