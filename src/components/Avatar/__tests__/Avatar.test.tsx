import React from 'react';
import { Avatar, AvatarProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: AvatarProps = {
  url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  size: "md"
};

const setup = (props = defaultProps) => render(<Avatar {...props} />);

describe('Avatar', () => {
  it('renders', () => {
    setup();
    screen.getByTestId("avatar")
  });
});
