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
import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Product>({ endpoint: 'products', queries: { limit: 1000 } });
  const paths = data.contents.map((content: { id: string }) => `/product/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.getListDetail<Product>({
    endpoint: 'products',
    contentId: id,
  });
  return {
    props: {
      product: data,
    },
  };
};

const ProductId: NextPage<Props> = ({ product }) => {
  return (
    <PageTemplete>
      <SEO
        title={`${product.name} || 大黒工業株式会社`}
        description='大黒工業株式会社の商品カテゴリー一覧ページです。'
        path={`${siteData.url}/product//${product.id}`}
      />
      <Breadcrumb lists={[{ title: '製品一覧', path: '/product' }, { title: product.name }]} />
      <PageHeader subHeading='products' title='商品詳細' />
      <div className='container max-w-6xl py-16'>
        <div className='flex flex-wrap justify-center'>
          <div className='my-5 lg:my-0 lg:w-1/3'>
            {product.image != null ? (
              <Image
                src={product.image.url}
                width={400}
                height={400}
                alt={product.name}
                className='rounded object-cover object-center'
              />
            ) : (
              <Image
                src='/images/dammy400x400.png'
                width={400}
                height={400}
                alt={product.name}
                className='rounded object-cover object-center'
              />
            )}
          </div>
          <div className='mt-6 lg:mt-0 lg:w-2/3 lg:pl-10'>
            <span className='text-lg text-gray-500'>商品コード：{product.id}</span>
            <h1 className='py-3 text-3xl font-bold text-gray-900'>{product.name}</h1>
            {product.is_newitem && (
              <span className='rounded bg-orange-500 px-4 py-2  text-lg font-bold text-white'>
                新商品
              </span>
            )}
            <div className='mt-3 w-full'>
              <table className='text-left text-sm text-gray-500'>
                <tbody>
                  <tr className='border-b hover:bg-white'>
                    <td className='w-1/3 px-1 py-4 md:px-6'>素材</td>
                    <td className='w-2/3 px-1 py-4 md:px-6'>{product.material}</td>
                  </tr>
                  <tr className='border-b hover:bg-white'>
                    <td className='w-1/3 px-1 py-4 md:px-6'>サイズ</td>
                    <td className='w-2/3 px-1 py-4 md:px-6'>{product.size}</td>
                  </tr>
                  <tr className='border-b hover:bg-white'>
                    <td className='w-1/3 px-1 py-4 md:px-6'>入り数</td>
                    <td className='w-2/3 px-1 py-4 md:px-6'>{product.quantity}</td>
                  </tr>
                  <tr className='border-b hover:bg-white'>
                    <td className='w-1/3 px-1 py-4 md:px-6'>商品説明</td>
                    <td
                      className='w-2/3 px-1 py-4 md:px-6'
                      dangerouslySetInnerHTML={{
                        __html: `${product.description}`,
                      }}
                    />
                  </tr>
                  <tr className='border-b hover:bg-white'>
                    <td className='w-1/3 px-1 py-4 md:px-6'>商品分類</td>
                    <td className='w-2/3 px-1 py-4 md:px-6'>
                      <Link
                        href={`/product/category/${product.category.id}`}
                        className='font-bold text-indigo-500 hover:text-indigo-700 hover:underline'
                      >
                        {product.category.name}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageTemplete>
  );
};

export default ProductId;
