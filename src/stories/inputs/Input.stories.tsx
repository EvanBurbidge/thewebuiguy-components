import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../../components/inputs/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputEl = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputEl.args = {
  id: "input",
  name: "input",
  label: "Some input",
  helpText: "",
  errorText: "",
  placeholder: "",
  onChange: () => { },
  defaultValue: "some value",
};

