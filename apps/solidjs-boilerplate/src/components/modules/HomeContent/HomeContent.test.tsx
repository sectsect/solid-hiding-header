import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@solidjs/testing-library';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { expect, describe, test } from 'vitest';

import HomeContent from '@/components/modules/HomeContent/HomeContent';

describe('Footer component', () => {
  test('should has copyright text', () => {
    const queryClient = new QueryClient();

    // const result = render(() => <HomeContent />);
    render(() => <HomeContent />, {
      wrapper: props => (
        <MetaProvider>
          <QueryClientProvider client={queryClient}>
            <Router>{props.children}</Router>
          </QueryClientProvider>
        </MetaProvider>
      ),
    });
    // screen.getByRole('button', { name: '' });
    const headingElm = screen.getByRole('heading', { name: 'Hello.' });
    expect(headingElm).toBeInTheDocument();
  });
});
