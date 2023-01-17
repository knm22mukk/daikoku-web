import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { PageTemplete } from '@/components/PageTemplete';
import { client } from '@/libs/client';
import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.getList<Product>({ endpoint: 'products' });
  const paths = data.contents.map((content: { id: string }) => `/product/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = String(context.params?.id);
  const data = await client.getListDetail<Product>({ endpoint: 'products', contentId: id });

  return {
    props: {
      product: data,
    },
  };
};

const ProductId: NextPage<Props> = ({ product }) => {
  return (
    <PageTemplete>
      <div className='container py-8'>
        <div>{product.id}</div>
        <div>{product.name}</div>
        <div>{product.material}</div>
        <div>{product.size}</div>
        <div>{product.quantity}</div>
        <div>{product.description}</div>
        <div>{product.is_newitem}</div>
        <Image src={product.image.url} width={500} height={500} alt={product.name} />
      </div>
    </PageTemplete>
  );
};

export default ProductId;
