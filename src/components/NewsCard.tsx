import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Date from 'components/Date';

type Props = {
  href: string;
  title: string;
  image: string;
  date: string;
};

const NewsCard: FC<Props> = ({ href, title, image, date }) => {
  return (
    <Link href={`/news/${href}`}>
      <a className='mx-auto transition duration-300 hover:scale-105'>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
          <Image src={image} alt={title} width={384} height={216} className='rounded-t-lg' />
          <div className='p-5'>
            <div className='my-3 text-gray-600'>
              <Date dateString={date} />
            </div>
            <h2 className='text-2xl font-bold tracking-tight hover:text-blue-600'>{title}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NewsCard;
