import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, ReactElement } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  ModalBody: ReactElement;
  ModalHeader: ReactElement;
  ModalFooter: ReactElement;
}

export const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose = () => { },
  ModalHeader = <Fragment />,
  ModalBody = <Fragment />,
  ModalFooter = <Fragment />
}: ModalProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">

              {ModalHeader}
              <div className="mt-3 sm:mt-5">
                {ModalBody}
              </div>

              {ModalFooter}

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
