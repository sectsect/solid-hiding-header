import { useQuery } from '@tanstack/solid-query';

// import type { Post } from '@/types/api/post.interface';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

// const fetchData = async (id: string): Promise<Post> =>
//   (await fetch(`${apiEndpointUrl}/posts/${id}`)).json();

const useFetchPost = (id: string) => {
  // const query = createQuery(() => ({
  //   queryKey: ['/posts'],
  //   queryFn: fetchData,
  // }));

  const query = useQuery(() => ({
    // Array Keys with variables
    // @ https://tanstack.com/query/v4/docs/react/guides/query-keys?from=reactQueryV3&original=https%3A%2F%2Freact-query-v3.tanstack.com%2Fguides%2Fquery-keys#array-keys-with-variables
    queryKey: [`/posts/`, id],
    // Pass parameter w/ inline anonymous functions. @ https://stackoverflow.com/a/68111112/4542456
    // queryFn: () => fetchData(id),
    queryFn: async () => {
      const result = await fetch(`${apiEndpointUrl}/posts/${id}`);
      if (!result.ok) throw new Error('Failed to fetch data');
      return result.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    throwOnError: true, // Throw an error if the query fails
  }));

  return query;
};

export default useFetchPost;
