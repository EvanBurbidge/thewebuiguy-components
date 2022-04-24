import React from 'react';
import { Panel } from '..'
import { ModalTitle, ModalBody, ModalFooter } from '../..';
import { render, screen, fireEvent } from '@testing-library/react';

const Title = () => <ModalTitle title="Test title" />
const Body = () => <ModalBody Content="Some test text for the modal" />

const defaultProps: any = {
  open: true,
  onClose: () => { },
  buttonType: "primary",
};

const fn = jest.fn();

const setup = (props = defaultProps) => render(<Panel PanelFooter={<ModalFooter confirmAction={fn} cancelAction={fn} cancelButtonText="cancel" confirmButtonText='confirm' buttonType={props.buttonType} />} PanelBody={<Body />} PanelHeader={<Title />} open={props.open} onClose={props.onClose} />);


describe('SidePanel', () => {
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
