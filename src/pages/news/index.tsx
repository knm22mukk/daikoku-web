import { GetStaticProps, NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsCard } from '@/components/NewsCard';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
import { client } from '@/libs/client';

interface Props {
  news: Array<{
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
  }>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'news' });
  return {
    props: {
      news: data.contents,
    },
  };
};

const News: NextPage<Props> = ({ news }) => {
  return (
    <PageTemplete>
      <SEO
        title='更新情報 || 大黒工業株式会社'
        description='大黒工業株式会社の新商品情報、会社情報などの新しい情報はこちらからご覧ください'
        path={`${siteData.url}/news`}
      />
      <Breadcrumb lists={[{ title: '更新情報' }]} />
      <PageHeader subHeading='news' title='更新情報' />
      <div className='py-8 container'>
        <div className='grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center sm:place-items-stretch'>
          {news.map((news) => (
            <NewsCard
              href={`/news/${news.id}`}
              key={news.id}
              image={news.image.url}
              title={news.title}
              publishedAt={news.publishedAt}
            />
          ))}
        </div>
      </div>
    </PageTemplete>
  );
};

export default News;
