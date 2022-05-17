import React from 'react';
import { Modal, ModalTitle, ModalBody, ModalFooter } from '..';

export interface ConfirmModalProps {
  title: string;
  Content: React.ReactElement | string;
  confirmText: string;
  cancelText: string;
  confirmAction: () => void;
  cancelAction: () => void;
  type: string;
  open: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  Content,
  confirmText,
  confirmAction,
  cancelAction,
  cancelText,
  type,
  open,
}: ConfirmModalProps) => {
  return (
    <Modal
      open={open}
      onClose={cancelAction}
      ModalHeader={
        <ModalTitle title={title} type={type} />
      }
      ModalBody={
        <ModalBody Content={Content} />
      }
      ModalFooter={
        <ModalFooter
          buttonType={type}
          confirmButtonText={confirmText}
          cancelButtonText={cancelText}
          confirmAction={confirmAction}
          cancelAction={cancelAction}
        />
      }
    />
  );
}
