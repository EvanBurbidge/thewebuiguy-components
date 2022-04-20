import React, { useMemo } from 'react';
import { DragDots } from '../DragDots/DragDots';

export interface DraggableItemProps {
  isDragging: boolean;
  drag: any;
  value: string;
  disabled: boolean,
  description: string,
  handleItemClick: any,
  isSelected: boolean,
}

export const DraggableItem: React.FC<DraggableItemProps> = ({
  drag,
  isDragging,
  value,
  description,
  disabled,
  isSelected,
  handleItemClick,
}:DraggableItemProps) => {
  const shouldDisable = useMemo(() => isSelected || disabled, [isSelected, disabled])
  
  if (shouldDisable) {
    return (
      <button
      ref={drag}
      id={`draggable-item`}
      className={`w-full bg-gray-100 border p-2 mb-5 rounded text-draggableFont flex align-center items-center cursor-not-allowed border-draggableBorder`}
    >
      <DragDots /> 
      <p className="ml-4">{description}</p>
    </button>
    )
  }
  
  return (
    <button
      ref={drag}
      id={`${value}-draggable-item`}
      onClick={() => handleItemClick({ value, description })}
      className={`w-full bg-draggableBg border p-2 mb-5 rounded text-draggableFont flex align-center items-center cursor-move ${isDragging ? 'border-highlight' : 'border-draggableBorder'}`}
    >
      <DragDots /> 
      <p className="ml-4">{description}</p>
    </button>
  );
}
