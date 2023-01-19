import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
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
      <div className='container py-8'>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.material}</div>
        <div>{product.size}</div>
        <div>{product.quantity}</div>
        <div>{product.description}</div>
        <div>{product.is_newitem}</div>
        {product.image != null ? (
          <Image src={product.image.url} width={400} height={400} alt={product.name} />
        ) : (
          <Image src='/images/dammy400x400.png' width={400} height={400} alt={product.name} />
        )}
      </div>
    </PageTemplete>
  );
};

export default ProductId;
