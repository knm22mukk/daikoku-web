import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const history: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='会社沿革 || 大黒工業株式会社'
        description='大黒工業株式会社の会社沿革のご案内ページです'
        path={`${siteData.url}/company/history`}
      />

      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '会社沿革' }]} />
      <PageHeader subHeading='history' title='会社沿革' />
    </PageTemplete>
  );
};

export default history;
