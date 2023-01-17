import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
import { client } from '@/libs/client';
import { Category, Product } from '@/types/Product';

interface Props {
  products: Product[];
  category: Category[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList({ endpoint: 'products' });
  const categoryData = await client.getList({ endpoint: 'categories' });
  return {
    props: {
      products: data.contents,
      category: categoryData.contents,
    },
  };
};

const ProductIndex: NextPage<Props> = ({ products, category }) => {
  return (
    <PageTemplete>
      <SEO
        title='製品一覧 || 大黒工業株式会社'
        description='大黒工業株式会社の製造商品、オリジナル商品をご紹介します。'
        path={`${siteData.url}/product`}
      />
      <Breadcrumb lists={[{ title: '製品一覧' }]} />
      <PageHeader subHeading='products' title='製品一覧' />
      <div className='container py-8'>
        <ul>
          {category.map((category) => (
            <li key={category.id}>
              <Link href={`product/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageTemplete>
  );
};

export default ProductIndex;
