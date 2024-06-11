// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

import { posts } from '@/mocks/data/posts';

const apiEndpointUrl = import.meta.env.VITE_PUBLIC_API_URL;

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  // http.get('https://example.com/user', () => {
  //   // ...and respond to them using this JSON response.
  //   return HttpResponse.json({
  //     id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
  //     firstName: 'John',
  //     lastName: 'Maverick',
  //   });
  // }),
  http.get(`${apiEndpointUrl}/posts`, () => {
    return HttpResponse.json(posts);
  }),
  http.get(`${apiEndpointUrl}/posts/1`, () => {
    return HttpResponse.json(posts[0]);
  }),
];
