import type { Component } from 'solid-js';
import { lazy } from 'solid-js';

import Head from '@/components/modules/Head/Head';
import { sanitizeTextarea } from '@/utils/sanitize';

const Counter = lazy(() => import('@/components/modules/Counter/Counter'));

const html = '<p>This is Little Project for Solid.js</p>';

const HomeContent: Component = () => {
  return (
    <>
      <Head />

      <header>
        <div class="inner">
          <h1 class="text-8xl">Hello.</h1>
          <div innerHTML={sanitizeTextarea(html)} class="text-2xl" />
        </div>
      </header>
      <Counter />
    </>
  );
};

export default HomeContent;
