import React from 'react';
import { ConfirmModal, ConfirmModalProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ConfirmModalProps = {
  
};

const setup = (props = defaultProps) => render(<ConfirmModal {...props} />);

describe('ConfirmModal', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
