import React from 'react';
import { PageTitle, PageTitleProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: PageTitleProps = {
  title: 'testing'
};

const setup = (props = defaultProps) => render(<PageTitle {...props} />);

describe('PageTitle', () => {
  it('renders', () => {
    setup({ title: 'foo' });
    screen.getByText('foo');
  });
});
