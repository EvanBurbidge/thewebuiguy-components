import React, { Fragment } from 'react';
import { RefreshIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react'

export interface OverlayLoaderProps {
  setOpen(): void;
}

export const OverlayLoader: React.FC<OverlayLoaderProps> = ({ setOpen = () => { } }: OverlayLoaderProps) => (
  <Transition.Root show={true} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={setOpen}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Overlay className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-transparent ">
              <RefreshIcon className="w-20 h-20 text-white animate-spin" />
            </Dialog.Overlay>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
)
