import type { Component } from 'solid-js';
import { ErrorBoundary, Suspense, For } from 'solid-js';

import { A } from '@solidjs/router';
import toast from 'solid-toast';

import Head from '@/components/modules/Head/Head';
import useFetchPostList from '@/hooks/useFetchPostList';

const PostList: Component = () => {
  // w/ createQuery() on '@tanstack/solid-query'
  const query = useFetchPostList();

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
          <ErrorBoundary
            fallback={<div>Error: {(query.error as Error).message}</div>}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <ul>
                <For each={query.data}>
                  {post => (
                    <li>
                      <A href={`/post/${post.id}`}>{post.title}</A>
                    </li>
                  )}
                </For>
              </ul>
            </Suspense>
          </ErrorBoundary>
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
