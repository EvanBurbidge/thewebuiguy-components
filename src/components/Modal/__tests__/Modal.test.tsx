import React from 'react';
import { Modal, ModalProps } from '..';
import { ModalTitle, ModalBody, ModalFooter } from '../..';
import { render, screen, fireEvent } from '@testing-library/react';


const Title = () => <ModalTitle title="Test title" type="primary"/>
const Body = () => <ModalBody Content="Some test text for the modal" />

const defaultProps: any = {
  open: true,
  onClose: () => { },
  buttonType: "primary",
  type: "primary"
};

const fn = jest.fn();

const setup = (props = defaultProps) => render(<Modal ModalFooter={<ModalFooter confirmAction={fn} cancelAction={fn} cancelButtonText="cancel" confirmButtonText='confirm' buttonType={props.buttonType} />} ModalBody={<Body />} ModalHeader={<Title />} open={props.open} onClose={props.onClose} />);

describe('Modal', () => {
  it('renders', async () => {
    setup();
    screen.getByText("Test title");
    screen.getByText("Some test text for the modal");
    screen.getByText("confirm");
    screen.getByText("cancel");

    await fireEvent.click(screen.getByText("confirm"));
    expect(fn).toHaveBeenCalled();

    await fireEvent.click(screen.getByText("cancel"));
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
