import type { JSX } from 'solid-js';

import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { render, renderHook, screen, waitFor } from '@solidjs/testing-library';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { describe, test, beforeEach } from 'vitest';

import PostList from '@/components/modules/PostList/PostList';
import useFetchPostList from '@/hooks/useFetchPostList';

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

  // test('should render "qui est esse" element after Data Fetching', async () => {
  //   expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();
  // });

  test('should success to fetch data', async () => {
    // expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();

    // @ https://github.com/testing-library/react-hooks-testing-library/issues/23#issuecomment-477542354
    const wrapper = (props: { children: JSX.Element }) => (
      <QueryClientProvider client={queryClient}>
        <Router>{props.children}</Router>
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useFetchPostList(), { wrapper });

    await waitFor(() => {
      expect(result.isSuccess).toBe(true);
    });

    await waitFor(() => {
      expect(result.data?.length).toBe(100);
    });

    // await waitFor(async () => {
    //   if (!result.isSuccess) {
    //     throw Error('wait');
    //   }

    //   // expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();
    //   expect(screen.getByText(/qui est esse/)).toBeInTheDocument();
    // });
  });
});
