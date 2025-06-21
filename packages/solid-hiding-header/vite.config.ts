/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    // rollupOptions: {
    //   output: {
    //     // entry chunk assets are always named "assets/[name].js"
    //     entryFileNames: `assets/[name].js`,
    //     chunkFileNames: `assets/[name].js`,
    //     assetFileNames: `assets/[name].[ext]`,
    //   },
    // },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  test: {
    environment: 'jsdom',
    testTransformMode: {
      web: ['/.[jt]sx?$/'],
    },
    setupFiles: './vitest.setup.ts',
    coverage: {
      all: false,
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    // Ensure proper cleanup between tests
    globals: false,
    // Enable isolation to prevent test pollution
    isolate: true,
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    server: {
      deps: {
        inline: [/solid-js/],
      },
    },
  },
});
