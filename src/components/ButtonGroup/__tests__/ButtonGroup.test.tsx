import React from 'react';
import { ButtonGroup, ButtonGroupProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ButtonGroupProps = {
  
};

const setup = (props = defaultProps) => render(<ButtonGroup {...props} />);

describe('ButtonGroup', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
