import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { pageLinks } from '@/data/pageLinks';

export const Footer: FC = () => {
  return (
    <footer className='bg-[#3D3D3D] py-6'>
      <div className='container'>
        <div className='mb-5 flex justify-center'>
          <Link href='/'>
            <Image src='/images/logo.png' width={280} height={70} alt='大黒工業ロゴ' />
          </Link>
        </div>
        <ul className='flex flex-col items-center justify-center md:flex-row'>
          {pageLinks.map((link) => (
            <li key={link.href} className='m-3 text-gray-300 hover:underline'>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <hr className='my-6 border-gray-200' />
        <div className='flex flex-col items-center justify-around md:flex-row'>
          <Link href='/privacy'>
            <span className='text-gray-300 hover:underline'>プライバシーポリシー</span>
          </Link>
          <span className='mt-3 text-sm text-gray-300 md:mt-0'>
            © 2023 Daikoku Industry.co.ltd. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
