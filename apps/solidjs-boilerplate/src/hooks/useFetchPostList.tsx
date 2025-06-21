import { createQuery } from '@tanstack/solid-query';

import type { Post } from '@/types/api/post.interface';

// import type { Post } from '@/types/api/post.interface';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

// const fetchData = async (): Promise<Post[]> =>
//   (await fetch(`${apiEndpointUrl}/posts`)).json();

const useFetchPostList = () => {
  // const query = createQuery(() => ({
  //   queryKey: ['/posts'],
  //   queryFn: fetchData,
  // }));

  const query = createQuery(() => ({
    queryKey: ['/posts'],
    queryFn: async () => {
      const result = await fetch(`${apiEndpointUrl}/posts`);
      if (!result.ok) throw new Error('Failed to fetch data');
      return result.json();
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    throwOnError: true, // Throw an error if the query fails
  }));

  return query;
};

export default useFetchPostList;
