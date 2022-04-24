import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel } from '.';
import { ModalTitle, ModalBody, ModalFooter } from '..';

const bloop = () => console.log("bloop");

const Title = () => <ModalTitle title="Test title" />
const Body = () => <ModalBody Content="Some test text for the modal" />
// const Footer = ({ buttonType }: any) =>

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Panel',
  component: Panel,
  argTypes: {
    buttonType: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    }
  }
} as ComponentMeta<typeof Panel>;

// @ts-ignore
const Template: ComponentStory<typeof Panel> = (args) => <Panel PanelFooter={<ModalFooter confirmAction={bloop} cancelAction={bloop} cancelButtonText="cancel" confirmButtonText='confirm' buttonType={args.buttonType} />} {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  PanelHeader: <Title />,
  PanelBody: <Body />,
  // @ts-ignore
  buttonType: "primary",
  open: true,
  onClose: () => console.log('bloop')
};
