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
      <PageHeader subHeading='products' title={product.name} />
      <div className='container py-8 max-w-6xl'>
        <div className='flex justify-center flex-wrap'>
          <div className='lg:w-1/3 my-5 lg:my-0'>
            {product.image != null ? (
              <Image
                src={product.image.url}
                width={400}
                height={400}
                alt={product.name}
                className='object-cover object-center rounded'
              />
            ) : (
              <Image
                src='/images/dammy400x400.png'
                width={400}
                height={400}
                alt={product.name}
                className='object-cover object-center rounded'
              />
            )}
          </div>
          <div className='lg:w-2/3 lg:pl-10 mt-6 lg:mt-0'>
            <span className='text-lg text-gray-500'>商品コード：{product.id}</span>
            <h1 className='text-gray-900 text-3xl font-bold py-3'>{product.name}</h1>
            {product.is_newitem && (
              <span className='bg-orange-500 text-white text-lg font-bold  px-4 py-2 rounded'>
                新商品
              </span>
            )}
            <div className='mt-3 w-full'>
              <table className='text-sm text-left text-gray-500'>
                <tbody>
                  <tr className='hover:bg-white border-b'>
                    <td className='px-1 md:px-6 py-4 w-1/3'>素材</td>
                    <td className='px-1 md:px-6 py-4 w-2/3'>{product.material}</td>
                  </tr>
                  <tr className='hover:bg-white border-b'>
                    <td className='px-1 md:px-6 py-4 w-1/3'>サイズ</td>
                    <td className='px-1 md:px-6 py-4 w-2/3'>{product.size}</td>
                  </tr>
                  <tr className='hover:bg-white border-b'>
                    <td className='px-1 md:px-6 py-4 w-1/3'>入り数</td>
                    <td className='px-1 md:px-6 py-4 w-2/3'>{product.quantity}</td>
                  </tr>
                  <tr className='hover:bg-white border-b'>
                    <td className='px-1 md:px-6 py-4 w-1/3'>商品説明</td>
                    <td
                      className='px-1 md:px-6 py-4 w-2/3'
                      dangerouslySetInnerHTML={{
                        __html: `${product.description}`,
                      }}
                    />
                  </tr>
                  <tr className='hover:bg-white border-b'>
                    <td className='px-1 md:px-6 py-4 w-1/3'>商品分類</td>
                    <td className='px-1 md:px-6 py-4 w-2/3'>
                      <Link
                        href={`/product/category/${product.category.id}`}
                        className='text-indigo-500 hover:text-indigo-700 hover:underline font-bold'
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
