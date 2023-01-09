import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const Contact: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: 'お問い合わせ' }]} />
      <h1>お問い合わせ</h1>
    </PageTemplete>
  );
};

export default Contact;
