import React from 'react';


import { Input } from '../Input';
import { InputGroup } from './InputGroup'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/InputGroup',
  component: InputGroup,
};


export const Primary = {
  args: {
    id: "input-group-id",
    label: "Input group",
    subtitle: "Input group subtitle",
    inputElement: <Input id="input-id" />,
    required: false,
    hasError: false,
    errorMessage: "some error"
  }
};
