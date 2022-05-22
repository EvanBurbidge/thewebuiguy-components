import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

export interface PanelProps {
  open: boolean;
  PanelBody: JSX.Element;
  PanelHeader: JSX.Element;
  PanelFooter: JSX.Element;
  onClose: () => void;
}

export const Panel: React.FC<PanelProps> = ({
  open,
  PanelBody,
  PanelHeader,
  PanelFooter,
  onClose,

}: PanelProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex justify-end min-h-screen">
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


          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col w-1/2 h-screen px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white">
              {PanelHeader}
              <div className="flex-1 w-full mt-3 overflow-auto divide-y sm:mt-5 divide-solid">
                {PanelBody}
              </div>
              {PanelFooter}

            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
