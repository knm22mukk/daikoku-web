import Link from 'next/link';
import { FC, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { headerNavLinks } from 'data/headerNavLinks';

const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='md:hidden'>
      <button
        aria-label='モバイルメニュー'
        type='button'
        onClick={handleClick}
        className='flex items-center text-3xl text-white'
      >
        {open ? <MdClose /> : <MdMenu />}
      </button>
      <nav
        className={`fixed w-full h-full top-24 right-0 bg-gray-100 opacity-95 z-10 transform ease-in-out duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='py-7'>
          {headerNavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <a
                className='flex justify-center py-4 text-2xl font-bold tracking-wide hover:opacity-80'
                onClick={handleClick}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
