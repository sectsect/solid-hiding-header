import type { Component } from 'solid-js';

import { HidingHeader } from '@sect/solid-hiding-header';
import { A } from '@solidjs/router';

import GlobalNavi from '@/components/modules/GlobalNavi/GlobalNavi';

const Header: Component = () => {
  return (
    <HidingHeader component="header">
      <div class="inner bg-white/80 py-5 backdrop-blur-md">
        <div class="flex items-center justify-between">
          <div class="text-5xl">
            <A href="/">Solid.js Boilerplate</A>
          </div>
          <GlobalNavi />
        </div>
      </div>
    </HidingHeader>
  );
};

export default Header;
