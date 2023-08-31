import type { Component } from 'solid-js';

import { A } from '@solidjs/router';

const GlobalNavi: Component = () => {
  return (
    <nav class="text-2xl">
      <ul class="flex">
        <li class="ml-6">
          <A href="/">Home</A>
        </li>
        <li class="ml-6">
          <A href="/post">Post</A>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNavi;
