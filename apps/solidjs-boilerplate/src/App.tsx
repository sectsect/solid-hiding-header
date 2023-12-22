import type { Component } from 'solid-js';

import { Meta } from '@solidjs/meta';
import type { RouteSectionProps } from '@solidjs/router';
import { Toaster } from 'solid-toast';

import Footer from '@/components/modules/Footer/Footer';
import Header from '@/components/modules/Header/Header';
import { AppConfig } from '@/constants/AppConfig';

const { siteName, locale } = AppConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const App: Component<RouteSectionProps<unknown>> = props => {
  return (
    <>
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@Twitter" />
      <Meta property="fb:app_id" content="0000000000000000" />
      <Meta property="og:locale" content={locale} />
      <Meta property="og:site_name" content={siteName} />

      <Header />
      <main class="flex-1 text-xl">
        <article>{props.children}</article>
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
