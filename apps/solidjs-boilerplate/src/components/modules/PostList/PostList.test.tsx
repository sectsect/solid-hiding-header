import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@solidjs/testing-library';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { describe, test, beforeEach } from 'vitest';

import PostList from '@/components/modules/PostList/PostList';

describe('PostList component', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    render(() => <PostList />, {
      wrapper: props => (
        <MetaProvider>
          <QueryClientProvider client={queryClient}>
            <Router>{props.children}</Router>
          </QueryClientProvider>
        </MetaProvider>
      ),
    });
  });

  test('should render "Loading..." element before Data Fetching', async () => {
    // screen.getByRole('button', { name: '' });
    const loadingEle = screen.getByText('Loading...'); // substring match
    expect(loadingEle).toBeInTheDocument();
  });

  test('should render "qui est esse" element after Data Fetching', async () => {
    expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();
  });
});
