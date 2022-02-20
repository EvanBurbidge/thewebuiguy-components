import React from 'react';
import { ExternalLink, ExternalLinkProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ExternalLinkProps = {
  href: "https://thewebuiguy.com",
  id: "to the webuiguy",
  children: "testing"
};

const setup = (props = defaultProps) => render(<ExternalLink {...props} />);

describe('ExternalLink', () => {
  it('renders', () => {
    setup();
    screen.getByText("testing")
  });
});
