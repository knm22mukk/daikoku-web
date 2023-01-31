import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';

import { Breadcrumb } from '@/components/Breadcrumb';
import { Date } from '@/components/Date';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
import { client } from '@/libs/client';
import { News } from '@/types/News';

interface Props {
  news: News;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<News>({ endpoint: 'news' });

  const paths = data.contents.map((content: { id: string }) => `/news/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context.params?.id);
  const data = await client.getListDetail<News>({ endpoint: 'news', contentId: id });

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
      <div className='container py-16 max-w-7xl'>
        <Image src={news.image.url} height={600} width={1280} alt={news.title} />
        <div className='flex items-center text-gray-500 py-4'>
          <AiOutlineClockCircle className='h-6 w-6' aria-hidden='true' />
          <div className='ml-2 text-2xl font-semibold leading-8'>
            <Date dateString={news.publishedAt} />
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${news.body}`,
          }}
          className='py-16 prose lg:prose-lg max-w-none'
        />
      </div>
    </PageTemplete>
  );
};

export default NewsId;
