import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Recruit: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='採用情報 || 大黒工業株式会社'
        description='大黒工業株式会社では一緒に働く仲間を随時募集しております。詳細は募集要項をご覧ください'
        path={`${siteData.url}/recruit`}
      />
      <Breadcrumb lists={[{ title: '採用情報' }]} />
      <PageHeader subHeading='recruit' title='採用情報' />
    </PageTemplete>
  );
};

export default Recruit;
