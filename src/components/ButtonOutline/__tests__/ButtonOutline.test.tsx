import React from 'react';
import { ButtonOutline, ButtonOutlineProps } from '..';
import { render, screen } from '@testing-library/react';


const defaultProps: ButtonOutlineProps = {
  id: 'outline-button-test',
  onClick: () => { },
  children: <p>test</p>
};

const setup = (props = defaultProps) => render(<ButtonOutline {...props} />);

describe('ButtonOutline', () => {
  it('renders', () => {
    setup();
    screen.getByText('test');
    // setup({children: 'foo'});
    // expect(screen.getByText('foo'));
  });
});
