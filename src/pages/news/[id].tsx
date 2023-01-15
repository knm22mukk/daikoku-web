import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
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
    <PageTemplete>
      <SEO
        title={`${news.title} || 大黒工業株式会社`}
        description={news.description}
        path={`${siteData.url}/news/${news.id}`}
      />
      <Breadcrumb lists={[{ title: '更新情報', path: '/news' }, { title: news.title }]} />
      <PageHeader subHeading='news' title={news.title} />
      <div className='py-8 container'>
        <Image src={news.image.url} height={600} width={1280} alt={news.title} />
        <p>{news.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
          className='prose lg:prose-lg max-w-none'
        />
      </div>
    </PageTemplete>
  );
};

export default NewsId;
