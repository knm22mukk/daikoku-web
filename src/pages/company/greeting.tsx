import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const greeting: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='代表挨拶 || 大黒工業株式会社'
        description='大黒工業株式会社の代表取締役よりご挨拶させていただきます'
        path={`${siteData.url}/company/greeting`}
      />

      <Breadcrumb lists={[{ title: '会社情報', path: '/company' }, { title: '代表挨拶' }]} />
      <PageHeader subHeading='greeting' title='代表挨拶' />
    </PageTemplete>
  );
};

export default greeting;
