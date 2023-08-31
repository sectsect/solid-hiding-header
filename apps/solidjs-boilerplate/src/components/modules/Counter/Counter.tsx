import type { Component } from 'solid-js';
import { createEffect, onCleanup } from 'solid-js';

// import { createSignal } from 'solid-js';
import { count, setCount } from '@/signals/signals';

const Counter: Component = () => {
  // const [count, setCount] = createSignal(0);

  createEffect(() => {
    // Reset count to default on unmounted.
    onCleanup(() => setCount(0));
  });

  return (
    <section>
      <div class="inner mb-10">
        <div>
          Count: <span class="ml-2 text-8xl font-bold">{count()}</span>
        </div>
        <button
          onClick={() => setCount(count() + 1)}
          class="bg-black px-3 py-1 text-white outline-none"
        >
          Increment
        </button>
      </div>
    </section>
  );
};

export default Counter;
