import { useMemo } from 'react';

export const useType = (type: string) => {

  const {background, text} = useMemo(() => {
    switch(type){
      case 'secondary': 
        return {
          background: 'bg-secondary',
          text: 'text-white'
        }
      case 'success': 
        return {
          background: 'bg-success',
          text: 'text-white'
        }
      case 'error': 
        return {
          background: 'bg-error',
          text: 'text-white'
        }
      case 'disabled': 
        return {
          background: 'bg-gray-500',
          text: 'text-white'
        }
      default:
        return {
          background: 'bg-primary',
          text: 'text-white'
        }
    }
  }, [type]);

  return {background, text}

}