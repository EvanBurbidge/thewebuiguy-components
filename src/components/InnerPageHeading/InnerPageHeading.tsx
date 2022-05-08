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
      </div>
    </div>
  )
}
