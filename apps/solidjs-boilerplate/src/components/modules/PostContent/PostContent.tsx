/* eslint-disable no-nested-ternary */
import type { Component } from 'solid-js';
import { Switch, Match } from 'solid-js';

import { useParams } from '@solidjs/router';
import { createQuery } from '@tanstack/solid-query';
import toast from 'solid-toast';

import Head from '@/components/modules/Head/Head';
import type { Post } from '@/types/api/post.interface';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

const fetchData = async (id: string): Promise<Post> =>
  (await fetch(`${apiEndpointUrl}/posts/${id}`)).json();

const PostContent: Component = () => {
  const params = useParams();
  const { id } = params;

  // w/ createQuery() on '@tanstack/solid-query'
  const query = createQuery({
    // Array Keys with variables
    // @ https://tanstack.com/query/v4/docs/react/guides/query-keys?from=reactQueryV3&original=https%3A%2F%2Freact-query-v3.tanstack.com%2Fguides%2Fquery-keys#array-keys-with-variables
    queryKey: () => [`/posts/`, id],
    // Pass parameter w/ inline anonymous functions. @ https://stackoverflow.com/a/68111112/4542456
    queryFn: () => fetchData(id),
  });
  if (query.isError) {
    toast.error('Failed to fetch data.');
  }

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
          <Switch>
            <Match when={query.isLoading}>
              <div>Loading...</div>
            </Match>
            <Match when={query.isError}>
              <div>Error: {(query.error as Error).message}</div>
            </Match>
            <Match when={query.isSuccess}>
              <>
                <h1 class="mb-5 text-4xl leading-none">{query.data?.title}</h1>
                <p class="whitespace-pre-wrap">{query.data?.body}</p>
              </>
            </Match>
          </Switch>
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
