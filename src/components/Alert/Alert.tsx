import { useType } from '@components/hooks/useType';
import React from 'react';

export interface AlertProps {
  title: string;
  subtitle: string;
  color?: string;
  type: string;
  handleDismiss?: () => any,
  children?: any
}

export const Alert: React.FC<AlertProps> = ({ type, title, subtitle, handleDismiss, children }: AlertProps) => {
  const { background, text, border } = useType(type);
  return (
    <div className={`${background} border-l-4 ${border} ${text} p-4`} role="alert" onClick={handleDismiss}>
      <p className="font-bold">{title}</p>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
