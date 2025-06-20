// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@solidjs/testing-library';
// eslint-disable-next-line import/no-extraneous-dependencies
import { afterEach } from 'vitest';

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});
