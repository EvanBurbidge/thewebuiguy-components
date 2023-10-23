import React from 'react';
import classNames from 'classnames';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'

export interface StatWithChangeItem {
  name: string;
  stat: string;
  previousStat: string;
  changeType: string;
  change: string;
}

export interface StatWithChangeProps {
  stats: StatWithChangeItem[]
}

export const StatWithChange: React.FC<StatWithChangeProps> = ({ stats }: StatWithChangeProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>
      <dl className="grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-primary">{item.name}</dt>
            <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-highlight">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-secondary">from {item.previousStat}</span>
              </div>

              <div
                className={classNames(
                  item.changeType === 'increase' ? 'bg-green-100 text-success' : 'bg-red-100 text-error',
                  'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-success"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowDownIcon
                    className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-error"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
