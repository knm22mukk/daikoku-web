import { NextPage } from 'next';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageTemplete } from '@/components/PageTemplete';

const Product: NextPage = () => {
  return (
    <PageTemplete>
      <Breadcrumb lists={[{ title: '製品一覧' }]} />
      <h1>商品情報</h1>
    </PageTemplete>
  );
};

export default Product;
