import React from 'react';
import { Alert, AlertProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: AlertProps = {
  title: "testing",
  subtitle: "testing",
  handleDismiss: () => console.log('noop'),
  color: 'red',
};

const setup = (props = defaultProps) => render(<Alert {...props} />);

describe('Alert', () => {
  it('renders', async () => {
    setup();
    screen.getByText(/testing/g);
  });
});
