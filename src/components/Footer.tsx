import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { SocialLinks } from 'data/SocialLinks';
import { headerNavLinks } from 'data/headerNavLinks';

const Footer: FC = () => {
  return (
    <footer className='py-8 text-white bg-[#3D3D3D]'>
      <div className='flex flex-col justify-center items-center'>
        <Link href='/'>
          <a className='py-2 hover:opacity-80'>
            <Image src='/images/daikoku-logo2.png' alt='大黒工業ロゴ' width={280} height={70} />
          </a>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center py-3 font-medium sm:flex-row'>
        {headerNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className='py-2 mx-4 border-b-2 border-transparent hover:border-white hover:opacity-80 transition duration-300'>
              {link.title}
            </a>
          </Link>
        ))}
      </div>
      <div className='flex justify-center items-center py-3 font-medium'>
        {SocialLinks.map((sns) => (
          <a
            key={sns.title}
            aria-label={`${sns.title}へのリンク`}
            target='_blank'
            rel='noopener noreferrer'
            href={sns.href}
            className='py-2 mx-4 border-b-2 border-transparent hover:border-white hover:opacity-80 transition duration-300'
          >
            {sns.title}
          </a>
        ))}
      </div>
      <p className='mt-5 text-sm font-medium tracking-wide text-center'>
        &copy; Copyright 2022, Daikoku Industry.co.ltd. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
