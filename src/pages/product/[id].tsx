import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import { client } from 'libs/client';
import { Product } from 'types/product';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'products' });

  const paths = data.contents.map((content: { id: string }) => `/product/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: any = context.params?.id;
  const data = await client.get({ endpoint: 'products', contentId: id });
  return {
    props: {
      product: data,
    },
  };
};

type Props = {
  product: Product;
};

const ProductId: NextPage<Props> = ({ product }) => {
  return <Layout>{product.name}</Layout>;
};

export default ProductId;
