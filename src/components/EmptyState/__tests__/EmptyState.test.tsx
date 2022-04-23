import React from 'react';
import { EmptyState, EmptyStateProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: EmptyStateProps = {
  title: "No Projects",
  subtitle: "Let's import some projects to get started",
  cta: "Import",
  ctaCallback: () => { },
};

const setup = (props = defaultProps) => render(<EmptyState {...props} />);

describe('EmptyState', () => {
  it('renders', () => {
    setup();
    screen.getByText(defaultProps.title);
    screen.getByText(defaultProps.subtitle);
    screen.getByText(defaultProps.cta);
  });
});
