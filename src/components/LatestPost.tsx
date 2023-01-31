import Link from 'next/link';
import { FC } from 'react';

import { BaseButton } from './Buttons';

import { NewsCard } from '@/components/NewsCard';
import { News } from '@/types/News';

interface Props {
  news: News[];
}

export const LatestPost: FC<Props> = ({ news }) => {
  return (
    <div className='container py-16 max-w-7xl'>
      <div className='flex items-center flex-col px-4'>
        <p className='uppercase text-sm text-center text-indigo-500 leading-4'>Information</p>
        <h2 className='text-4xl lg:text-4xl font-extrabold text-center leading-10  pt-4'>
          最新情報
        </h2>
      </div>
      <div className='grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 place-content-center sm:place-items-stretch'>
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Link href='/news'>
          <BaseButton type='button'>更新情報一覧へ</BaseButton>
        </Link>
      </div>
    </div>
  );
};
