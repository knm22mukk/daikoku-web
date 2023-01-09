import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const Company: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: '会社情報' }]} />
      <h1>会社情報</h1>
    </PageTemplete>
  );
};

export default Company;
