import { NextPage } from 'next';
import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
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
      <PageHeader subHeading='company' title='会社情報' />
      <ul>
        <li>
          <Link href='/company/greeting'>代表挨拶</Link>
        </li>
        <li>
          <Link href='/company/offices'>拠点一覧</Link>
        </li>
        <li>
          <Link href='/company/history'>会社沿革</Link>
        </li>
      </ul>
    </PageTemplete>
  );
};

export default Company;
