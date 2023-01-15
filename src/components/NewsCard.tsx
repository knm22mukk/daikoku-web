import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  href: string;
  image: string;
  title: string;
  publishedAt: string;
}

export const NewsCard: FC<Props> = ({ href, image, title, publishedAt }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-md shadow-md'>
      <Link href={href}>
        <Image src={image} alt='blogimage' width={384} height={195} className='rounded-t-md' />
      </Link>
      <div className='p-5'>
        <div className='my-3 italic font-semibold text-gray-600'>{publishedAt}</div>
        <Link
          href={href}
          className='text-xl font-bold text-gray-800 hover:underline hover:opacity-80'
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
