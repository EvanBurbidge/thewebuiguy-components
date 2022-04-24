import React from 'react';
import { HeadingMetaData, HeadingMetaDataProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: HeadingMetaDataProps = {
  
};

const setup = (props = defaultProps) => render(<HeadingMetaData {...props} />);

describe('HeadingMetaData', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
