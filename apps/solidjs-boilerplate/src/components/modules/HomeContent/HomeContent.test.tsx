import { MetaProvider } from '@solidjs/meta';
import { Route, Router } from '@solidjs/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@solidjs/testing-library';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { expect, describe, test } from 'vitest';

import HomeContent from '@/components/modules/HomeContent/HomeContent';

describe('HomeContent component', () => {
  test('should has heading text', () => {
    const queryClient = new QueryClient();

    // const result = render(() => <HomeContent />);
    render(() => <HomeContent />, {
      wrapper: props => (
        <MetaProvider>
          <QueryClientProvider client={queryClient}>
            <Router
              // eslint-disable-next-line @typescript-eslint/no-shadow
              root={props => <>{props.children}</>}
            >
              <Route path="/" component={() => <>{props.children}</>} />
            </Router>
          </QueryClientProvider>
        </MetaProvider>
      ),
    });
    // screen.getByRole('button', { name: '' });
    const headingElm = screen.getByRole('heading', { name: 'Hello.' });
    expect(headingElm).toBeInTheDocument();
  });
});
