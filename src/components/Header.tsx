import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { HeaderMenu } from './HeaderMenu';

import { pageLinks } from '@/data/pageLinks';

export const Header: FC = () => {
  return (
    <header className='h-24 flex items-center justify-around bg-[#3D3D3D]'>
      <Image src='/images/logo.png' width={280} height={70} alt='大黒工業ロゴ' />
      <div className='hidden md:block'>
        <ul className='flex justify-center items-center'>
          {pageLinks.map((link) => (
            <li
              key={link.href}
              className='mx-3 font-bold border-b-2 border-transparent duration-300 hover:border-white text-white hover:opacity-70'
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <HeaderMenu />
    </header>
  );
};
