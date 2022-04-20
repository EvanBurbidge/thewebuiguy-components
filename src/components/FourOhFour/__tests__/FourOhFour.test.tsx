import React from 'react';
import { FourOhFour } from '..';
import { render, screen } from '@testing-library/react';

describe('FourOhFour', () => {
  it('renders', () => {
    render(<FourOhFour />);
    screen.getByAltText('404 error');
  });
});
