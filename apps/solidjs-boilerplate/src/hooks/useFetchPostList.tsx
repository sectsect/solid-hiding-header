import { createQuery } from '@tanstack/solid-query';

import type { Post } from '@/types/api/post.interface';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

const fetchData = async (): Promise<Post[]> =>
  (await fetch(`${apiEndpointUrl}/posts`)).json();

const useFetchPostList = () => {
  const query = createQuery(() => ({
    queryKey: ['/posts'],
    queryFn: fetchData,
  }));

  return query;
};

export default useFetchPostList;
