import React from 'react';
import { Button, ButtonOutline } from '..';

export interface ModalFooterProps {
  confirmAction: () => void;
  cancelAction: () => void;
  buttonType?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ confirmAction, cancelAction, buttonType = "primary", confirmButtonText = "confirm", cancelButtonText = "cancel" }: ModalFooterProps) => {
  return (
    <div className='flex justify-end w-full mt-5 sm:mt-6 align-center'>
      <div className="mr-2">
        {confirmAction && <Button type={buttonType} id="modal-confirmation-button" onClick={confirmAction}>{confirmButtonText}</Button>}
      </div>
      {cancelAction && (
        <ButtonOutline type={buttonType} id="modal-confirmation-button" onClick={cancelAction}>
          {cancelButtonText}
        </ButtonOutline>
      )
      }
    </div>
  );
}
