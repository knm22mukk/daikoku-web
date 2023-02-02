import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { HeaderMenu } from './HeaderMenu';

import { pageLinks } from '@/data/pageLinks';

export const Header: FC = () => {
  return (
    <header className='flex h-24 items-center justify-around bg-[#3D3D3D]'>
      <Link href='/'>
        <Image src='/images/logo.png' width={280} height={70} alt='大黒工業ロゴ' />
      </Link>
      <div className='hidden lg:block'>
        <ul className='flex items-center justify-center'>
          {pageLinks.map((link) => (
            <li
              key={link.href}
              className='mx-3 border-b-2 border-transparent font-bold text-white duration-300 hover:border-white hover:opacity-70'
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
