import Head from 'next/head';
import { FC } from 'react';

import { siteData } from '@/data/siteData';

interface Props {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const SEO: FC<Props> = ({
  title = siteData.title,
  description = siteData.description,
  path = siteData.url,
  image = siteData.image,
  imageWidth = 1280,
  imageHeight = 640,
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:url' content={path} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content={String(imageWidth)} />
      <meta property='og:image:height' content={String(imageHeight)} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={`@${siteData.twitter}`} />
      <meta name='twitter:pageTitle' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <link rel='canonical' href={path} />
      <link rel='shortcut icon' href='/images/favicon.ico' />
    </Head>
  );
};
