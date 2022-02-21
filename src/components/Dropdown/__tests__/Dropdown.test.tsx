import React from 'react';
import { Dropdown, DropdownProps } from '..';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps: DropdownProps = {
  label: "Label for dropdown",
  actions: [{ label: "test", callback: () => { } }]
};

const setup = (props = defaultProps) => render(<Dropdown {...props} />);

describe('Dropdown', () => {
  it('renders', async () => {
    setup();

    const button = screen.getByText('Label for dropdown');
    await fireEvent.click(button);
    screen.getByText("test");
  });
});
