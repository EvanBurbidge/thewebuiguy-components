import React from 'react';
import { CalendarIcon, CurrencyEuroIcon } from '@heroicons/react/solid'
import { InnerPageHeading, InnerPageHeadingProps } from '..';
import { render, screen } from '@testing-library/react';
import { Button, ButtonOutline } from '../..';

const Actions = () => (
  <div className="flex">
    <ButtonOutline id="secondary" onClick={() => { }}>Secondary</ButtonOutline>
    <Button id="secondary" onClick={() => { }} classNames="ml-3">Primary</Button>
  </div>
)

const defaultProps: InnerPageHeadingProps = {
  breadcrumbs: [
    {
      text: "First",
      isActive: false,
      href: 'https://thewebuiguy-components.vercel.com',
    },
    {
      text: "Second",
      isActive: true,
      href: 'https://thewebuiguy-components.vercel.com',
    },
    {
      text: "Third",
      isActive: false,
      href: 'https://thewebuiguy-components.vercel.com',
    }
  ],
  metaData: [
    { text: "20/12/2022", Icon: CalendarIcon },
    { text: "100 - 120k", Icon: CurrencyEuroIcon },
  ],
  title: "Some page title",
  Actions: <Actions />
};

const setup = (props = defaultProps) => render(<InnerPageHeading {...props} />);

describe('HeadingMetaData', () => {
  it('renders', () => {
    setup();
    screen.getByText('First');
    screen.getByText('Second');
    screen.getByText('Third');
    screen.getByText('20/12/2022');
    screen.getByText('100 - 120k');
    screen.getByText('Primary');
    screen.getByText('Secondary');
  });
});
