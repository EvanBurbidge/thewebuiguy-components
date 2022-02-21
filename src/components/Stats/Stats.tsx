import React from 'react';

export interface StatItem {
  name: string;
  stat: string;
}

export interface StatsProps {
  stats: StatItem[]
}

export const Stats: React.FC<StatsProps> = ({ stats }: StatsProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>
      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        {stats.map((item: StatItem) => (
          <div key={item.name} className="px-4 py-5 overflow-hidden bg-white rounded-lg shadow sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
