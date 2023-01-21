import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const index: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='カタログ一覧 || 大黒工業株式会社'
        description='大黒工業株式会社のカタログ一覧ページです。こちらからもお取り扱い商品のご確認をいただけます。'
        path={`${siteData.url}/catalog`}
      />
      <Breadcrumb lists={[{ title: 'カタログ一覧' }]} />
      <PageHeader subHeading='catalog' title='カタログ一覧' />
    </PageTemplete>
  );
};

export default index;
