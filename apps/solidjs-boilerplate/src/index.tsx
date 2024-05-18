/* @refresh reload */
import '@/styles/globals.css';
import 'solid-devtools';
import { lazy } from 'solid-js';

import { MetaProvider } from '@solidjs/meta';
import { Router, Route } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { render } from 'solid-js/web';

import App from '@/App';

const HomeContent = lazy(
  () => import('@/components/modules/HomeContent/HomeContent'),
);
const PostList = lazy(() => import('@/components/modules/PostList/PostList'));
const PostContent = lazy(
  () => import('@/components/modules/PostContent/PostContent'),
);

const queryClient = new QueryClient();

render(
  () => (
    <MetaProvider>
      <QueryClientProvider client={queryClient}>
        <Router root={App}>
          <Route path="/" component={HomeContent} />
          <Route path="/post" component={PostList} />
          <Route path="/post/:id" component={PostContent} />
        </Router>
      </QueryClientProvider>
    </MetaProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
