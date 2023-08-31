/* @refresh reload */
import '@/styles/globals.css';
import 'solid-devtools';
import { MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { render } from 'solid-js/web';

import App from '@/App';

const queryClient = new QueryClient();

render(
  () => (
    <MetaProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </MetaProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
