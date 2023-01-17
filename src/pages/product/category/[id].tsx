import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { PageTemplete } from '@/components/PageTemplete';
import { client } from '@/libs/client';
import { Category, Product } from '@/types/Product';

interface Props {
  products: Product[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Category>({ endpoint: 'categories' });

  const paths = data.contents.map((content: { id: string }) => `/product/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context.params?.id);
  const data = await client.getList<Product>({
    endpoint: 'products',
    queries: { filters: `category[equals]${id}` },
  });
  console.log(data);
  return {
    props: {
      products: data.contents,
    },
  };
};

const CategoryId: NextPage<Props> = ({ products }) => {
  if (products.length === 0) {
    return (
      <PageTemplete>
        <div className='container py-8'>まだ商品が登録されていません。</div>
      </PageTemplete>
    );
  }
  return (
    <PageTemplete>
      <div className='container py-8'>
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

export default CategoryId;
