/* eslint-disable no-nested-ternary */
import type { Component } from 'solid-js';
import { createEffect, ErrorBoundary, Suspense } from 'solid-js';

import { useParams } from '@solidjs/router';
import toast from 'solid-toast';

import Head from '@/components/modules/Head/Head';
import useFetchPost from '@/hooks/useFetchPost';

const PostContent: Component = () => {
  const params = useParams();
  const { id } = params;

  // w/ createQuery() on '@tanstack/solid-query'
  const query = useFetchPost(id);

  createEffect(() => {
    if (query.isError) {
      toast.error('Failed to fetch data.');
    }
  });

  // w/ createResource()
  // const [post] = createResource<Post, string>(id, fetchData);

  return (
    <>
      {query.isSuccess && (
        <Head
          title={query.data.title}
          canonical={`/post/${id}`}
          description={query.data.body}
        />
      )}

      <section>
        <div class="inner">
          <ErrorBoundary
            fallback={<div>Error: {(query.error as Error).message}</div>}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <h1 class="mb-5 text-4xl leading-none">{query.data?.title}</h1>
              <p class="whitespace-pre-wrap">{query.data?.body}</p>
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* <section>
        <div class="inner">
          <h2 class="text-4xl">w/ createResource()</h2>
          <Switch fallback={<div>Error</div>}>
            <Match when={post.loading}>
              <div>Loading...</div>
            </Match>
            <Match when={post.error}>
              <div>Error: {post.error}</div>
            </Match>
            <Match when={post()}>
              <>
                <h1 class="mb-5 text-4xl leading-none">{post().title}</h1>
                <p class="whitespace-pre-wrap">{post().body}</p>
              </>
            </Match>
          </Switch>
        </div>
      </section> */}
    </>
  );
};

export default PostContent;
