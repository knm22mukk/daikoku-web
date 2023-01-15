import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { client } from '@/libs/client';

interface Props {
  news: {
    id: string;
    title: string;
    description: string;
    body: string;
    image: {
      url: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'news' });

  const paths = data.contents.map((content: { id: string }) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string = String(context.params?.id);
  const data = await client.get({ endpoint: 'news', contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

const NewsId: NextPage<Props> = ({ news }) => {
  return (
    <main>
      <h1>{news.title}</h1>
      <Image src={news.image.url} height={600} width={1280} alt={news.title} />
      <p>{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.body}`,
        }}
      />
    </main>
  );
};

export default NewsId;
