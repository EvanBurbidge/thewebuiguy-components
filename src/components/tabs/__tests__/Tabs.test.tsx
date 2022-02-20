import React from 'react';
import { Tabs, TabsProps } from '..';
import { fireEvent, render, screen } from '@testing-library/react';

const defaultProps: TabsProps = {
  tabs: [
    { label: "tab 1", isActive: false },
    { label: "tab 2", isActive: true },
  ],
  onClick: () => { },
};

const setup = (props = defaultProps) => render(<Tabs {...props} />);

describe('Tabs', () => {
  it('renders', async () => {
    setup();
    const tab1 = screen.getByText("tab 1");
    screen.getByText("tab 2");
    await fireEvent.click(tab1);
  });
});
