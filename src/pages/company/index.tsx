import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Company: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='会社情報 || 大黒工業株式会社'
        description='大黒工業株式会社の会社情報をご案内いたします。'
        path={`${siteData.url}/company`}
      />
      <Breadcrumb lists={[{ title: '会社情報' }]} />
      <h1>会社情報</h1>
    </PageTemplete>
  );
};

export default Company;
