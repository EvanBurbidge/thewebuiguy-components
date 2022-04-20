import React from 'react';


export interface ActivityFeedPerson {
  id: number | string;
  name: string;
  imageUrl: string;
}

export interface ActivityFeedItem {
  time: string;
  commit: string;
  project: string;
  branch: string;
  id: number | string;
  person: ActivityFeedPerson;
}

export interface ActivityFeedProps {
  activities: ActivityFeedItem[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }:ActivityFeedProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {activities.map((activityItem: ActivityFeedItem) => (
        <li key={activityItem.id} className="py-4">
          <div className="flex space-x-3">
            <img className="w-6 h-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                <p className="text-sm text-gray-500">{activityItem.time}</p>
              </div>
              <p className="text-sm text-gray-500">
                Deployed {activityItem.project} ({activityItem.commit} in {activityItem.branch})
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
