import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const offices: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='拠点一覧 || 大黒工業株式会社'
        description='大黒工業株式会社の事務所、拠点一覧のご案内ページです'
        path={`${siteData.url}/company/offices`}
      />

      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '拠点一覧' }]} />
      <PageHeader subHeading='offices' title='拠点一覧' />
    </PageTemplete>
  );
};

export default offices;
