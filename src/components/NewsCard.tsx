import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Date } from '@/components/Date';
import { News } from '@/types/News';

interface Props {
  news: News;
}

export const NewsCard: FC<Props> = ({ news }) => {
  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-md shadow-md'>
      <Link href={`/news/${news.id}`}>
        <Image
          src={news.image.url}
          alt='blogimage'
          width={384}
          height={195}
          className='rounded-t-md'
        />
      </Link>
      <div className='p-5'>
        <div className='my-3 italic font-semibold text-gray-600'>
          <Date dateString={news.publishedAt} />
        </div>
        <Link
          href={`/news/${news.id}`}
          className='text-xl font-bold text-gray-800 hover:underline hover:opacity-80'
        >
          {news.title}
        </Link>
      </div>
    </div>
  );
};
