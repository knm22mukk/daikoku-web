import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { headerNavLinks } from 'data/headerNavLinks';

const Header: FC = () => {
  return (
    <header className='container flex justify-around items-center mx-auto h-24'>
      <Link href='/' aria-label='ホームへ'>
        <a className='hover:opacity-80 cursor-pointer'>
          <Image src='/images/daikoku-logo.png' alt='大黒工業ロゴ' width={230} height={110} />
        </a>
      </Link>
      <nav className='flex justify-around'>
        {headerNavLinks.map((link) => (
          <Link href={link.title} key={link.href}>
            <a className='p-3 font-bold hover:text-green-600 border-b-2 border-transparent hover:border-green-600 duration-300'>
              {link.title}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
