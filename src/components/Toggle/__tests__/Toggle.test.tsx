import React from 'react';
import { Toggle } from '..';
import { render } from '@testing-library/react';

const defaultProps: any = {
};

const setup = (props = defaultProps) => render(<Toggle {...props} />);

describe('Toggle', () => {
  xit('renders', () => {
    setup();
   
  });
});