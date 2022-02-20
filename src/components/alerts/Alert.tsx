import React from 'react';

interface AlertProps {
  title: string;
  subtitle: string;
  color: string;
  handleDismiss?: () => any,
  children?: any
}

export const Alert = (
  {
    title = '',
    subtitle = '',
    color = 'red',
    handleDismiss = () => { },
    children,
  }: AlertProps
) => (
  <div className={`bg-${color}-100 border-l-4 border-${color}-500 text-${color}-700 p-4`} role="alert" onClick={handleDismiss}>
    <p className="font-bold">{title}</p>
    <p>{subtitle}</p>
    {children}
  </div>
);


export default Alert;