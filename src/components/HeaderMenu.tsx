import Link from 'next/link';
import { FC, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { pageLinks } from '@/data/pageLinks';

export const HeaderMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = (): void => {
    setOpen(!open);
  };
  return (
    <div className='mx-3 lg:hidden'>
      <div className='flex items-center'>
        <button
          type='button'
          aria-label='メニューボタン'
          onClick={handleClick}
          className='text-3xl text-white'
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div
          className={`fixed top-24 right-0 z-10 h-full w-full bg-gray-300 duration-300 ease-in-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className='fixed py-10 container'>
            <ul>
              {pageLinks.map((link) => (
                <li
                  key={link.href}
                  onClick={handleClick}
                  className='flex justify-center py-5 text-2xl font-bold hover:opacity-70'
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
