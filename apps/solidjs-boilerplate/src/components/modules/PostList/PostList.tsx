import type { Component } from 'solid-js';
import { Switch, Match, For } from 'solid-js';

import { A } from '@solidjs/router';
import { createQuery } from '@tanstack/solid-query';
import toast from 'solid-toast';

import Head from '@/components/modules/Head/Head';
import type { Post } from '@/types/api/post.interface';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

const fetchData = async (): Promise<Post[]> =>
  (await fetch(`${apiEndpointUrl}/posts`)).json();

const PostList: Component = () => {
  // w/ createQuery() on '@tanstack/solid-query'
  const query = createQuery({ queryKey: () => ['/posts'], queryFn: fetchData });
  if (query.isError) {
    toast.error('Failed to fetch data.');
  }

  // w/ createResource()
  // const [posts, { refetch }] = createResource<Post[]>(fetchData);

  return (
    <>
      <Head
        title="Posts Archive"
        canonical="/post"
        description="This is Posts Archive page."
      />

      <section>
        <div class="inner">
          <Switch>
            <Match when={query.isLoading}>
              <div>Loading...</div>
            </Match>
            <Match when={query.isError}>
              <div>Error: {(query.error as Error).message}</div>
            </Match>
            <Match when={query.isSuccess}>
              <ul>
                <For each={query.data}>
                  {post => (
                    <li>
                      <A href={`/post/${post.id}`}>{post.title}</A>
                    </li>
                  )}
                </For>
              </ul>
            </Match>
          </Switch>
        </div>
      </section>

      {/* <section>
        <div class="inner">
          <h2 class="text-4xl">w/ createResource()</h2>
          <div class="mb-10">
            <button
              onClick={() => refetch()}
              class="bg-black px-3 py-1 text-white outline-none"
            >
              Refetch
            </button>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <ul>
              <For each={posts()}>
                {post => (
                  <li>
                    <A href={`/post/${post.id}`}>{post.title}</A>
                  </li>
                )}
              </For>
            </ul>
          </Suspense>
        </div>
      </section> */}
    </>
  );
};

export default PostList;
