/* This example requires Tailwind CSS v2.0+ */
import { useMemo, useCallback } from 'react';

interface ButtonInterface {
  id: string;
  onClick: any;
  type?: string;
  children: any,
  disabled?: boolean,
  buttonType?: any
}

export default function ButtonOutline({
  id,
  type,
  onClick,
  disabled = false,
  buttonType = "button",
  children,
}: ButtonInterface) {

  const buttonColors = useMemo(() => {
    if (disabled) {
      return 'border-gray-300 hover:border-gray-400 text-gray-600'
    }
    switch (type) {
      case 'error':
        return 'border-error hover:border-errorHover text-error'
      case 'success':
        return 'border-success hover:border-successHover text-success'
      case 'secondary':
        return 'border-secondary hover:border-secondaryHover text-secondary'
      default:
        return 'border-primary hover:border-primaryHover text-secondary'
    }
  }, [type, disabled]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [onClick, disabled]);

  return (
    <button
      id={id}
      data-testid={id}
      type={buttonType}
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 border border-1 bg-white text-base font-medium rounded shadow-sm focus:outline-none ${buttonColors}`}
    >
      {children}
    </button >

  )
}
