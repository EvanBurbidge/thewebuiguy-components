import React from 'react';
import { NoData, NoDataProps } from '..';
import { render, screen } from '@testing-library/react';


const setup = (props: NoDataProps) => render(<NoData {...props} />);

describe('NoData', () => {
  it('renders', () => {
    setup({ title: "oh no", subtitle: "no data", cta: "make some", handleCtaClick: () => { } });
    screen.getByText('oh no');
    screen.getByText('no data');
    screen.getByText('make some');
  });
});
