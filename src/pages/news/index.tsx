import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
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
  console.log(data.contents);
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
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </PageTemplete>
  );
};

export default News;
