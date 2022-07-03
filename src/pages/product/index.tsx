import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';
import { client } from 'libs/client';
import { Category, Product } from 'types/product';

export const getStaticProps: GetStaticProps = async () => {
  const product = await client.get({ endpoint: 'products' });
  const category = await client.get({ endpoint: 'categories' });

  return {
    props: {
      products: product.contents,
      categories: category.contents,
    },
  };
};

type Props = {
  products: Product[];
  categories: Category[];
};

const index: NextPage<Props> = ({ products, categories }) => {
  return (
    <Layout>
      <SectionHeader subHeading='product' title='商品情報' />
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </Layout>
  );
};

export default index;
