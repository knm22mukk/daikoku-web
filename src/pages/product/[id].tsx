import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';
import { client } from 'libs/client';
import { Product } from 'types/product';
import 'react-responsive-carousel/lib/styles/carousel.css';

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
  return (
    <Layout>
      <SectionHeader subHeading={`商品コード: ${product.id}`} title={product.name} />
      <div className='container'>
        <div className='flex flex-col justify-between mx-auto md:flex-row'>
          <div className='flex shrink-0 items-center p-5 mx-auto w-full md:w-5/12'>
            <Carousel>
              <div className=''>
                <Image src={product.image_1.url} alt={product.name} width={400} height={400} />
              </div>
              <div className=''>
                <Image src={product.image_2.url} alt={product.name} width={400} height={400} />
              </div>
              <div className=''>
                <Image src={product.image_3.url} alt={product.name} width={400} height={400} />
              </div>
            </Carousel>
          </div>
          <div className='pb-8 mx-auto w-full max-w-md md:py-16 md:mr-12 md:max-w-none'>
            <table className='w-full table-auto'>
              <tbody>
                <tr className='bg-gray-100'>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>商品コード</td>
                  <td className='py-2 px-4 border-y'>{product.id}</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>商品名</td>
                  <td className='py-2 px-4 border-y'>{product.name}</td>
                </tr>
                <tr className='bg-gray-100'>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>入数</td>
                  <td className='py-2 px-4 border-y'>{product.input_number}</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>サイズ</td>
                  <td className='py-2 px-4 border-y'>{product.size}</td>
                </tr>
                <tr className='bg-gray-100'>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>素材</td>
                  <td className='py-2 px-4 border-y'>{product.material}</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>JANコード</td>
                  <td className='py-2 px-4 border-y'>{product.JAN}</td>
                </tr>
                <tr className='bg-gray-100'>
                  <td className='py-2 px-4 w-1/4 text-center border-y'>備考</td>
                  <td
                    dangerouslySetInnerHTML={{ __html: `${product.description}` }}
                    className='py-2 px-4 border-y'
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-center py-8'>
          <Link href='/product'>
            <a className='py-3 px-5 m-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-800 rounded-lg'>
              一覧に戻る
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProductId;
