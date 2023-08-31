import { Title, Link, Meta } from '@solidjs/meta';

import { AppConfig } from '@/constants/AppConfig';
import { formatDescription } from '@/utils/format';

const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL ?? '';

const { title, description, og } = AppConfig;

interface Props {
  title?: string;
  canonical?: string;
  description?: string;
  og?: {
    image: {
      url: string;
    };
  };
}

const Head = (props: Props) => {
  return (
    <>
      <Title>{props.title ? `${props.title} | ${title}` : title}</Title>
      <Link
        rel="canonical"
        href={props.canonical ? `${siteUrl}${props.canonical}` : siteUrl}
      />
      <Meta
        name="description"
        content={
          props.description ? formatDescription(props.description) : description
        }
      />
      <Meta
        property="og:title"
        content={props.title ? `${props.title} | ${title}` : title}
      />
      <Meta
        property="og:description"
        content={
          props.description ? formatDescription(props.description) : description
        }
      />
      <Meta
        property="og:url"
        content={props.canonical ? `${siteUrl}${props.canonical}` : siteUrl}
      />
      <Meta
        property="og:type"
        content={props.canonical === undefined ? 'website' : 'article'}
      />
      <Meta
        property="og:image"
        content={
          props.og?.image.url ? `${siteUrl}${props.og.image.url}` : og.image.url
        }
      />
    </>
  );
};

export default Head;
