import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import MobileNav from 'components/MobileNav';
import { headerNavLinks } from 'data/headerNavLinks';

const Header: FC = () => {
  return (
    <header className='py-3 bg-[#3D3D3D]'>
      <div className='flex justify-around items-center mx-auto'>
        <Link href='/' aria-label='ホームへ'>
          <a className='hover:opacity-80 cursor-pointer'>
            <Image src='/images/daikoku-logo2.png' alt='大黒工業ロゴ' width={280} height={70} />
          </a>
        </Link>
        <nav className='flex justify-around'>
          <div className='hidden md:block'>
            {headerNavLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                <a className='py-2 mx-3 font-semibold text-white border-b-2 border-transparent hover:border-white hover:opacity-80 transition duration-300'>
                  {link.title}
                </a>
              </Link>
            ))}
          </div>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
