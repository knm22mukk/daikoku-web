import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';

const Contact: NextPage = () => {
  return (
    <PageTemplete>
      <SEO
        title='お問い合わせ || 大黒工業株式会社'
        description='大黒工業株式会社へのお問い合わせはこちらからメール送信をお願いいたします'
        path={`${siteData.url}/contact`}
      />
      <Breadcrumb lists={[{ title: 'お問い合わせ' }]} />
      <h1>お問い合わせ</h1>
    </PageTemplete>
  );
};

export default Contact;
