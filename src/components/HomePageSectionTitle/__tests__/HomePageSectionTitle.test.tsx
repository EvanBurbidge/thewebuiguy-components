import React from 'react';
import { HomePageSectionTitle, HomePageSectionTitleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: HomePageSectionTitleProps = {
  title: "title",
  subtitle: "subtitle"
};

const setup = (props = defaultProps) => render(<HomePageSectionTitle {...props} />);

describe('HomePageSectionTitle', () => {
  it('renders', () => {
    setup();
    screen.getByText('title');
    screen.getByText('subtitle');
  });
});
