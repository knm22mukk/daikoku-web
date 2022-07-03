import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  href: string;
  name: string;
  image: string;
  code: string;
};

const ProductCard: FC<Props> = ({ href, name, image, code }) => {
  return (
    <Link href={`/product/${href}`}>
      <a className='mx-auto transition duration-300 hover:scale-105'>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <Image src={image} alt={name} width={400} height={400} className='rounded-t-lg' />
          <div className='p-5'>
            <div className='my-3 text-gray-600'>商品コード: {code}</div>
            <h2 className='font-bold tracking-tight hover:text-blue-600'>{name}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
