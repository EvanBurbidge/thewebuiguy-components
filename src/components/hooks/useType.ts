import { useMemo } from 'react';

export const useType = (type: string) => {

  const {background, text, border} = useMemo(() => {
    switch(type){
      case 'secondary': 
        return {
          background: 'bg-secondary',
          border: 'border-secondaryHover',
          text: 'text-white'
        }
      case 'success': 
        return {
          background: 'bg-success',
          border: 'border-successHover',
          text: 'text-white'
        }
      case 'error': 
        return {
          background: 'bg-error',
          border: 'border-errorHover',
          text: 'text-white'
        }
      case 'warning': 
        return {
          background: 'bg-warning',
          border: 'border-warningHover',
          text: 'text-white'
        }
      case 'disabled': 
        return {
          background: 'bg-gray-500',
          border: 'border-gray-300',
          text: 'text-white'
        }
      default:
        return {
          background: 'bg-primary',
          border: 'border-primaryHover',
          text: 'text-white'
        }
    }
  }, [type]);

  return {background, text, border}

}