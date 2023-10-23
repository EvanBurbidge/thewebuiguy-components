import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export interface DropdownItemProps {
  label: string;
  callback(): any;
}

export interface DropdownProps {
  actions: DropdownItemProps[];
  label: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ actions, label }: DropdownProps) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-highlight">
        {label}
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {actions.map((action: DropdownItemProps) => (
            <Menu.Item key={action.label}>
              {({ active }) => (
                <span
                  onClick={action.callback}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {action.label}
                </span>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)
