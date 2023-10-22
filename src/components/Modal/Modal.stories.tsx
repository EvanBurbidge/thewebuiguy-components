import React from 'react';


import { Modal } from './Modal'
import { ModalTitle, ModalBody, ModalFooter } from '..';

const bloop = () => console.log("bloop");

const Title = () => <ModalTitle title="Test title" type="" />
const Body = () => <ModalBody Content="Some test text for the modal" />

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TheWebUiGuy/Modal',
  component: Modal,
  argTypes: {
    buttonType: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
    type: {
      control: { type: "select", options: ["primary", "secondary", "success", "error"], defaultValue: "primary" },
    },
  }
};


export const Primary = {
  args: {
    open: false,
    onClose: bloop,
    // @ts-ignore
    buttonType: "primary",
    // @ts-ignore
    type: "primary"
  }
};
