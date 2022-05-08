import React, { ReactElement, Fragment } from 'react';
/* This example requires Tailwind CSS v2.0+ */

import {
  ChevronDownIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { Breadcrumb, Breadcrumbs, HeadingMetaData, MetaDataItem } from '..';

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export interface InnerPageHeadingProps {
  breadcrumbs: Breadcrumb[];
  metaData: MetaDataItem[];
  title: string;
  Actions?: ReactElement;
}

export const InnerPageHeading: React.FC<InnerPageHeadingProps> = ({
  title = '',
  breadcrumbs = [],
  metaData = [],
  Actions = <Fragment />
}: InnerPageHeadingProps) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex-1 min-w-0 p-3">
        {breadcrumbs.length ? <Breadcrumbs breadcrumbs={breadcrumbs} /> : null}
        <h2 className="mt-2 text-2xl font-bold leading-7 text-primary sm:text-3xl sm:truncate">{title}</h2>
        <HeadingMetaData metaData={metaData} />
      </div>
      <div className="flex mt-5 lg:mt-0 lg:ml-4">
        {Actions}

        {/* Dropdown */}
        <Menu as="span" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            More
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-48 py-1 mt-2 -mr-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
