import { useMemo, useCallback } from 'react';

export interface UseButtonHandlersProps {
  type?: string,
  disabled?: boolean,
  onClick: any;
}

export const useButtonHandlers = ({
  type,
  disabled,
  onClick,
}: UseButtonHandlersProps) => {

  const outlineColors = useMemo(() => {
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


  const solidColors  = useMemo(() => {
    if (disabled) {
      return 'bg-gray-300 hover:bg-gray-400 text-white'
    }
    switch (type) {
      case 'error':
        return 'bg-error hover:bg-errorHover text-white'
      case 'success':
        return 'bg-success hover:bg-successHover text-white'
      case 'secondary':
        return 'bg-secondary hover:bg-secondaryHover text-white'
      default:
        return 'bg-primary hover:bg-primaryHover text-white'
    }
  }, [type, disabled]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [onClick, disabled]);

  return {
    solidColors,
    handleClick,
    outlineColors,
  }
}