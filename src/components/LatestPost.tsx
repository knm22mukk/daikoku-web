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
    <div className='container max-w-7xl py-16'>
      <div className='flex flex-col items-center px-4'>
        <p className='text-center text-sm uppercase leading-4 text-indigo-500'>Information</p>
        <h2 className='pt-4 text-center text-4xl font-extrabold leading-10  lg:text-4xl'>
          最新情報
        </h2>
      </div>
      <div className='grid place-content-center gap-4 py-16 sm:grid-cols-2 sm:place-items-stretch lg:grid-cols-3'>
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
