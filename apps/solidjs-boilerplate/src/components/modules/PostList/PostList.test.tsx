import type { JSX } from 'solid-js';

import { MetaProvider } from '@solidjs/meta';
import {
  Route,
  Router,
  MemoryRouter,
  createMemoryHistory,
} from '@solidjs/router';
import { render, renderHook, screen, waitFor } from '@solidjs/testing-library';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { HttpResponse, http } from 'msw';
import toast from 'solid-toast';
import { describe, expect, test, vi } from 'vitest';

import App from '@/App';
import PostList from '@/components/modules/PostList/PostList';
import useFetchPostList from '@/hooks/useFetchPostList';
import { server } from '@/mocks/server';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

vi.mock('solid-toast', () => ({
  default: {
    error: vi.fn(),
  },
  Toaster: vi.fn(),
}));

describe('PostList component', () => {
  // const queryClient = new QueryClient({
  //   defaultOptions: { queries: { retry: false } },
  // });

  // beforeEach(() => {
  //   render(() => <PostList />, {
  //     wrapper: props => (
  //       <MetaProvider>
  //         <QueryClientProvider client={queryClient}>
  //           <Router
  //             // eslint-disable-next-line @typescript-eslint/no-shadow
  //             root={props => <>{props.children}</>}
  //           >
  //             <Route path="/" component={() => <>{props.children}</>} />
  //           </Router>
  //         </QueryClientProvider>
  //       </MetaProvider>
  //     ),
  //   });
  // });

  test('should render "Loading..." element before Data Fetching', async () => {
    const queryClient = new QueryClient();

    render(() => <PostList />, {
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
    const loadingEle = screen.getByText('Loading...'); // substring match
    expect(loadingEle).toBeInTheDocument();
  });

  // test('should render "qui est esse" element after Data Fetching', async () => {
  //   expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();
  // });

  test('should success to fetch data', async () => {
    const queryClient = new QueryClient();

    render(() => <PostList />, {
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

    // expect(await screen.findByText(/qui est esse/)).toBeInTheDocument();

    // @ https://github.com/testing-library/react-hooks-testing-library/issues/23#issuecomment-477542354
    const wrapper = (props: { children: JSX.Element }) => (
      <QueryClientProvider client={queryClient}>
        <Router
          // eslint-disable-next-line @typescript-eslint/no-shadow
          root={props => <>{props.children}</>}
        >
          <Route path="/" component={() => <>{props.children}</>} />
        </Router>
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useFetchPostList(), { wrapper });

    await waitFor(() => {
      expect(result.isSuccess).toBe(true);
    });

    await waitFor(() => {
      expect(result.data?.length).toBe(100);
    });
  });

  test('should render post titles', async () => {
    // Mock window.ResizeObserver @ https://vitest.dev/guide/mocking.html#globals
    const ResizeObserverMock = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    // now you can access it as `ResizeObserver` or `window.ResizeObserver`

    const queryClient = new QueryClient();

    // @see https://github.com/solidjs/solid-router/issues/335#issuecomment-1918115042
    const history = createMemoryHistory();
    history.set({ value: '/post' });

    render(() => (
      <MetaProvider>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter root={App} history={history}>
            <Route path="/post" component={PostList} />
          </MemoryRouter>
        </QueryClientProvider>
      </MetaProvider>
    ));

    await waitFor(async () => {
      expect(
        screen.getByText(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        ),
      ).toBeInTheDocument();
    });

    await waitFor(async () => {
      expect(screen.getByText('nesciunt quas odio')).toBeInTheDocument();
    });
  });

  test('should handle API call failure', async () => {
    const errorMessage = 'Failed to fetch data.';
    const toastErrorSpy = vi.spyOn(toast, 'error');

    server.use(
      http.get(
        `${apiEndpointUrl}/posts`,
        () =>
          new HttpResponse(null, {
            status: 500,
          }),
      ),
    );

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } }, // @ https://github.com/TanStack/query/discussions/2300#discussioncomment-811768
    });

    render(() => <PostList />, {
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

    const wrapper = (props: { children: JSX.Element }) => (
      <QueryClientProvider client={queryClient}>
        <Router
          // eslint-disable-next-line @typescript-eslint/no-shadow
          root={props => <>{props.children}</>}
        >
          <Route
            path="/"
            component={() => (
              <>
                {props.children}
                {/* <Toaster position="bottom-center" /> */}
              </>
            )}
          />
        </Router>
      </QueryClientProvider>
    );

    // screen.getByRole('');
    const { result } = renderHook(() => useFetchPostList(), {
      wrapper,
    });

    await waitFor(() => expect(result.isError).toBe(true));

    await waitFor(() => {
      expect(result.error).toEqual(Error('Failed to fetch data'));
    });

    await waitFor(() => {
      expect(toastErrorSpy).toHaveBeenCalledWith(errorMessage);
    });

    // expect(
    //   await screen.findByText('Failed to fetch data.'),
    // ).toBeInTheDocument();
  });
});
