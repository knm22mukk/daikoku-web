import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const Privacy: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: 'プライバシーポリシー' }]} />
      <h1>プライバシーポリシー</h1>
    </PageTemplete>
  );
};

export default Privacy;
