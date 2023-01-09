import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Privacy: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='プライバシーポリシー || 大黒工業株式会社'
        description='大黒工業株式会社のプライバシーポリシーを記載させていただいているページです'
        path={`${siteData.url}/privacy`}
      />
      <Breadcrumb lists={[{ title: 'プライバシーポリシー' }]} />
      <h1>プライバシーポリシー</h1>
    </PageTemplete>
  );
};

export default Privacy;
