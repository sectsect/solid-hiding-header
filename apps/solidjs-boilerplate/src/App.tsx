import type { Component } from 'solid-js';
import { lazy } from 'solid-js';

import { Meta } from '@solidjs/meta';
import { Routes, Route } from '@solidjs/router';
import { Toaster } from 'solid-toast';

import Footer from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header';
import { AppConfig } from '@/constants/AppConfig';

const { siteName, locale } = AppConfig;

const HomeContent = lazy(
  () => import('@/components/modules/HomeContent/HomeContent'),
);
const PostList = lazy(() => import('@/components/modules/PostList/PostList'));
const PostContent = lazy(
  () => import('@/components/modules/PostContent/PostContent'),
);

const App: Component = () => {
  return (
    <>
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@Twitter" />
      <Meta property="fb:app_id" content="0000000000000000" />
      <Meta property="og:locale" content={locale} />
      <Meta property="og:site_name" content={siteName} />

      <Header />
      <main class="flex-1 text-xl">
        <article>
          <Routes>
            <Route path="/" component={HomeContent} />
            <Route path="/post" component={PostList} />
            <Route path="/post/:id" component={PostContent} />
          </Routes>
        </article>
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
