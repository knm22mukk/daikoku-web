import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const News: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='更新情報 || 大黒工業株式会社'
        description='大黒工業株式会社の新商品情報、会社情報などの新しい情報はこちらからご覧ください'
        path={`${siteData.url}/news`}
      />
      <Breadcrumb lists={[{ title: '更新情報' }]} />
      <h1>更新情報</h1>
    </PageTemplete>
  );
};

export default News;
