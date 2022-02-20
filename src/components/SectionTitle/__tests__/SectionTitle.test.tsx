import React from 'react';
import { SectionTitle, SectionTitleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SectionTitleProps = {
  title: "test"
};

const setup = (props = defaultProps) => render(<SectionTitle {...props} />);

describe('SectionTitle', () => {
  it('renders', () => {
    setup({ title: 'foo' });
    screen.getByText('foo');
  });
});
