import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const Recruit: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: '採用情報' }]} />
      <h1>採用情報</h1>
    </PageTemplete>
  );
};

export default Recruit;
