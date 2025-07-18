/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@solidjs/testing-library';

import { server } from '@/mocks/server';

// So this is basically saying any network requests that come through route them to mock service worker instead of the actual network.
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup(); // Add cleanup after each test
});
afterAll(() => server.close());
