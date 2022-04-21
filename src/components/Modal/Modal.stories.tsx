import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal'
import { ModalTitle, ModalBody, ModalFooter } from '..';

const bloop = () => console.log("bloop");

const Title = () => <ModalTitle title="Test title" />
const Body = () => <ModalBody Content="Some test text for the modal" />

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Modal',
  component: Modal,
  argTypes: {
    buttonType: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => <Modal ModalFooter={<ModalFooter confirmAction={bloop} cancelAction={bloop} cancelButtonText="cancel" confirmButtonText='confirm' buttonType={args.buttonType} />} ModalBody={<Body />} ModalHeader={<Title />} open={args.open} onClose={args.onClose} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  open: false,
  onClose: bloop,
  // @ts-ignore
  buttonType: "primary"
};
