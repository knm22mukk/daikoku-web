import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const News: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: '更新情報' }]} />
      <h1>更新情報</h1>
    </PageTemplete>
  );
};

export default News;
