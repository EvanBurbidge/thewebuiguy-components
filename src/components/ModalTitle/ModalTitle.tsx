import { Dialog } from '@headlessui/react'
import React, { Fragment, ReactElement } from 'react';


export interface ModalTitleProps {
  Icon?: ReactElement;
  title: string;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ Icon, title }: ModalTitleProps) => {
  return (
    <div className="sm:flex sm:items-start">
      {Icon && (
        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full sm:mr-4 sm:mx-0 sm:h-10 sm:w-10">
          {Icon}
        </div>
      )}
      <div className="mt-3 text-left sm:mt-0 sm:text-left">
        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
          {title}
        </Dialog.Title>
      </div>
    </div>
  );
}
