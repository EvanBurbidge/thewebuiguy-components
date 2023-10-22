import React from 'react';
import cs from 'classnames'
import { Button, ButtonProps } from '..';

interface ButtonConfig {
  id: string;
  text: string;
  action: () => any;
  isFirst?: boolean;
  isLast?: boolean;
}

export interface ButtonGroupProps {
  buttonConfig: ButtonConfig[];
  type: string;
}

export function ButtonGroup({
  buttonConfig,
  type,
}: ButtonGroupProps) {
  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      {buttonConfig.map((button: ButtonConfig, idx) => {
        return (
          <Button
            type={type}
            id={button.id}
            onClick={button.action}
            key={`${idx}-${button.id}`}
            classNames={cs('px-3 py-2 rounded-none focus:z-10 text-sm font-semibold relative inline-flex items-center', {
              " rounded-l-md  ": button.isFirst,
              "-ml-px rounded-r-md": button.isLast,
            })}
          >
            {button.text}
          </Button>
        )
      })}
    </span>
  )
}
