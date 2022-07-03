import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/Layout';
import ProductCard from 'components/ProductCard';
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
      <div className='container py-8'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              href={product.id}
              name={product.name}
              image={product.image_1.url}
              code={product.id}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
