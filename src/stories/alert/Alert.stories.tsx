import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert from '@components/alerts/Alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      control: { type: "select", options: ["primary", "secondary", "error", "success"], defaultValue: "primary" },
    },
  }
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "This is a title",
  subtitle: "This is a subtitle",
  children: () => <p>Testing </p>,
  handleDismiss: () => {},
};

