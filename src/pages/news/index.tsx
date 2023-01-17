import { GetStaticProps, NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsCard } from '@/components/NewsCard';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
import { client } from '@/libs/client';
import { News } from '@/types/News';

interface Props {
  news: News[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<News>({ endpoint: 'news', queries: { limit: 12 } });
  return {
    props: {
      news: data.contents,
    },
  };
};

const NewsIndex: NextPage<Props> = ({ news }) => {
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
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </PageTemplete>
  );
};

export default NewsIndex;
