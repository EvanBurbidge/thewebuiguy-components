import React from 'react';
import { SidePanel, SidePanelProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SidePanelProps = {
  
};

const setup = (props = defaultProps) => render(<SidePanel {...props} />);

describe('SidePanel', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
