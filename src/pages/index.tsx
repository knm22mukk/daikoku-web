import { GetStaticProps, NextPage } from 'next';

import { Cta } from '@/components/Cta';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { LatestPost } from '@/components/LatestPost';
import { PageTemplete } from '@/components/PageTemplete';
import { ProductFeatures } from '@/components/ProductFeatures';
import { SEO } from '@/components/SEO';
import { client } from '@/libs/client';
import { News } from '@/types/News';

interface Props {
  news: News[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<News>({ endpoint: 'news', queries: { limit: 3 } });
  return {
    props: {
      news: data.contents,
    },
  };
};

const Home: NextPage<Props> = ({ news }) => {
  return (
    <PageTemplete>
      <SEO />
      <Hero />
      <Features />
      <ProductFeatures />
      <LatestPost news={news} />
      <Cta />
    </PageTemplete>
  );
};

export default Home;
