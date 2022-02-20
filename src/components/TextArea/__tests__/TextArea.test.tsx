import React from 'react';
import { TextArea, TextAreaProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TextAreaProps = {
  id: "textarea",
  onChange: () => { },
};

const setup = (props = defaultProps) => render(<TextArea {...props} />);

describe('TextArea', () => {
  it('renders', () => {
    setup();
    screen.getByTestId('textarea');
  });
});
