import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Product: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='製品一覧 || 大黒工業株式会社'
        description='大黒工業株式会社の製造商品、オリジナル商品をご紹介します。'
        path={`${siteData.url}/product`}
      />
      <Breadcrumb lists={[{ title: '製品一覧' }]} />
      <PageHeader subHeading='products' title='製品一覧' />
    </PageTemplete>
  );
};

export default Product;
