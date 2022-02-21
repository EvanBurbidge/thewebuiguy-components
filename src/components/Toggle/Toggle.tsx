import React from 'react';
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import classNames from 'classnames'

export interface ToggleProps { defaultEnabled: boolean; onChange: (a: boolean) => void }

export const Toggle: React.FC<ToggleProps> = ({ defaultEnabled = false, onChange }: ToggleProps) => {
  const [enabled, setEnabled] = useState(defaultEnabled);

  const handleOnChange = (value: boolean): void => {
    onChange(value);
    setEnabled(value);
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleOnChange}
      className={classNames(
        enabled ? 'bg-highlight' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
  )
}


export default function Example() {

}
