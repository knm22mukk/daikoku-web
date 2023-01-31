import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { PageHeader } from '@/components/PageHeader';
import { PageTemplete } from '@/components/PageTemplete';
import { SEO } from '@/components/SEO';
import { siteData } from '@/data/siteData';
import { client } from '@/libs/client';
import { Category, Product } from '@/types/Product';

interface Props {
  products: Product[];
  categoryId: string;
  categoryName: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Category>({ endpoint: 'categories', queries: { limit: 1000 } });

  const paths = data.contents.map((content: { id: string }) => `/product/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const productData = await client.getList<Product>({
    endpoint: 'products',
    queries: { filters: `category[equals]${id}`, limit: 1000 },
  });
  console.log(productData.contents[0]);
  return {
    props: {
      products: productData.contents,
      categoryId: productData.contents[0].category.id,
      categoryName: productData.contents[0].category.name,
    },
  };
};

const CategoryId: NextPage<Props> = ({ products, categoryId, categoryName }) => {
  if (products.length === 0) {
    return (
      <PageTemplete>
        <div className='container py-16'>まだ商品が登録されていません。</div>
      </PageTemplete>
    );
  }
  return (
    <PageTemplete>
      <SEO
        title={`${categoryName}の商品一覧 || 大黒工業株式会社`}
        description='大黒工業株式会社の商品カテゴリー一覧ページです。'
        path={`${siteData.url}/product/category/${categoryId}`}
      />
      <Breadcrumb lists={[{ title: '製品一覧', path: '/product' }, { title: categoryName }]} />
      <PageHeader subHeading='products' title={`${categoryName}の商品一覧`} />
      <div className='container py-16 max-w-7xl'>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <li key={product.id} className='w-full max-w-sm flex justify-around items-around'>
              <div className='bg-white rounded-lg shadow-md'>
                <Link href={`/product/${product.id}`}>
                  {product.image != null ? (
                    <Image
                      src={product.image.url}
                      width={400}
                      height={400}
                      alt={product.name}
                      className='p-4 rounded-t-lg hover:opacity-70'
                    />
                  ) : (
                    <Image
                      src='/images/dammy400x400.png'
                      width={400}
                      height={400}
                      alt={product.name}
                      className='p-4 rounded-t-lg hover:opacity-70'
                    />
                  )}
                </Link>
                <div className='p-4 text-gray-700 h-24'>
                  <span>{product.id}</span>
                  <h4 className='text-xl font-bold tracking-tight hover:opacity-70 hover:underline'>
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h4>
                </div>
                <div className='p-4 flex'>
                  {product.is_newitem && (
                    <span className='bg-yellow-100 text-yellow-800 text-xs font-bold mr-2 px-3 py-1 rounded-full'>
                      新商品
                    </span>
                  )}
                  <span className='bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full'>
                    {categoryName}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageTemplete>
  );
};

export default CategoryId;
