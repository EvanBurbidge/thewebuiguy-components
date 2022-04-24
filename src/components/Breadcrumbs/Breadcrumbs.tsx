import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid'

export interface Breadcrumb {
  text: string;
  isActive: boolean;
  href?: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs = [] }: BreadcrumbsProps) => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="flex items-center">
      {breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
        <li key={breadcrumb.text}>
          <div className="flex items-center">
            {index !== 0 && <ChevronRightIcon className="flex-shrink-0 w-5 h-5 text-secondary" aria-hidden="true" />}
            <a href={breadcrumb.href} className={`text-sm font-medium ${breadcrumb.isActive ? 'text-highlight' : 'text-primary'} hover:text-gray-700`}>
              {breadcrumb.text}
            </a>
          </div>
        </li>
      ))}
    </ol>
  </nav>
);

