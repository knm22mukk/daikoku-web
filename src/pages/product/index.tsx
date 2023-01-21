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
  categories: Category[];
}

export const getStaticProps: GetStaticProps = async () => {
  const categoryData = await client.getList<Category>({
    endpoint: 'categories',
    queries: { limit: 1000 },
  });
  console.log(categoryData);
  return {
    props: {
      categories: categoryData.contents,
    },
  };
};

const ProductIndex: NextPage<Props> = ({ categories }) => {
  return (
    <PageTemplete>
      <SEO
        title='製品一覧 || 大黒工業株式会社'
        description='大黒工業株式会社の製造商品、オリジナル商品をご紹介します。'
        path={`${siteData.url}/product`}
      />
      <Breadcrumb lists={[{ title: '製品一覧' }]} />
      <PageHeader subHeading='products' title='製品一覧' />
      <div className='container py-8 max-w-7xl'>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`product/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageTemplete>
  );
};

export default ProductIndex;
