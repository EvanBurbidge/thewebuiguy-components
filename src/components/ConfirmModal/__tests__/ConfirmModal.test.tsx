import React from 'react';
import { ConfirmModal, ConfirmModalProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ConfirmModalProps = {
  open: true,
  cancelAction: () => { },
  confirmAction: () => { },
  cancelText: "No way",
  confirmText: "Maybe",
  Content: "Do you want to do the thing",
  type: "primary",
  title: "do you want the thing"
};

const setup = (props = defaultProps) => render(<ConfirmModal {...props} />);

describe('ConfirmModal', () => {
  it('renders', () => {
    setup();
    screen.getByText('No way');
    screen.getByText('Maybe');
    screen.getByText('Do you want to do the thing');
    screen.getByText('do you want the thing');
  });
});
