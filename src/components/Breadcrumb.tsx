import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';

interface Props {
  lists: Array<{
    title: string;
    path?: string;
  }>;
}

export const Breadcrumb: FC<Props> = ({ lists }) => {
  return (
    <nav className='flex px-2 md:px-5 py-3 bg-gray-200' aria-label='Breadcrumb'>
      <div className='container'>
        <ol className='flex items-center text-sm font-medium text-gray-500'>
          <li>
            <Link href='/' className='flex items-center hover:text-gray-900 hover:underline'>
              <AiOutlineHome className='mr-2' />
              ホーム
            </Link>
          </li>
          {lists.map(({ title, path = '/' }, index) => (
            <li key={index} className='flex items-center'>
              <AiOutlineRight aria-hidden='true' className='mx-2' />
              {lists.length - 1 !== index ? (
                <>
                  <Link href={path} className='hover:text-gray-900 hover:underline'>
                    {title}
                  </Link>
                </>
              ) : (
                <span aria-current='page'>{title}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
