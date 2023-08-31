import type { Component } from 'solid-js';

import { count } from '@/signals/signals';

const Footer: Component = () => {
  return (
    <footer class="mt-20 bg-black py-10 text-white">
      <div class="inner flex items-center justify-between">
        <p>&copy; Copyright</p>
        <div class="text-2xl font-bold">
          Count: <span class="text-4xl">{count()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
