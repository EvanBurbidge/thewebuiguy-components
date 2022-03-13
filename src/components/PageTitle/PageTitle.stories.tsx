import React from 'react';
import { Button } from '../Button';
import { ButtonOutline } from '../ButtonOutline';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageTitle } from './PageTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Some page with args",
  Primary: <Button id="test" onClick={() => { }}>Primary</Button>,
  Secondary: <ButtonOutline id="test-outline" onClick={() => { }}>Secondary</ButtonOutline>,
  Dropdown: <Button id="dropdown" onClick={() => { }}>DROPDOWN</Button>,
};
