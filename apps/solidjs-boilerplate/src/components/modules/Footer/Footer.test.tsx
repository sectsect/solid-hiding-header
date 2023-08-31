import { Router } from '@solidjs/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@solidjs/testing-library';
import { expect, describe, test } from 'vitest';

import Footer from '@/components/modules/Footer/Footer';

describe('Footer component', () => {
  test('should has copyright text', () => {
    // const result = render(() => <Footer />);
    render(() => <Footer />, {
      wrapper: props => <Router>{props.children}</Router>,
    });
    const copyElm = screen.getByText(/^© Copyright$/i); // full string match, ignore case
    expect(copyElm).toBeInTheDocument();
  });

  test('should has classes', async () => {
    render(() => <Footer />, {
      wrapper: props => <Router>{props.children}</Router>,
    });
    const footerElm = screen.getByRole('contentinfo', { name: '' });
    await expect(footerElm).toHaveClass(
      'mt-20',
      'bg-black',
      'py-10',
      'text-white',
    );
  });
});
