import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { pageLinks } from '@/data/pageLinks';

export const Footer: FC = () => {
  return (
    <footer className='py-6 bg-[#3D3D3D]'>
      <div className='container'>
        <div className='flex justify-center mb-5'>
          <Link href='/'>
            <Image src='/images/logo.png' width={280} height={70} alt='大黒工業ロゴ' />
          </Link>
        </div>
        <ul className='flex flex-col md:flex-row justify-center items-center'>
          {pageLinks.map((link) => (
            <li key={link.href} className='m-3 hover:underline text-gray-400'>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <hr className='my-6 border-gray-200' />
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <Link href='/privacy'>
            <span className='text-gray-400 hover:underline'>プライバシーポリシー</span>
          </Link>
          <span className='text-sm text-gray-300 mt-3 md:mt-0'>
            © 2023 Daikoku Industry.co.ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
