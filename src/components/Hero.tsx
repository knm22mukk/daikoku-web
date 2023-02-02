import Image from 'next/image';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className='relative flex items-center justify-center opacity-70'>
      <Image
        src='/images/moldimage1280x650.webp'
        width={1280}
        height={700}
        alt='モールドイメージ'
        className='object-cover'
      />
      <div className='container absolute z-10 flex h-1/3 items-center justify-center'>
        <h1 className='rounded-lg bg-white px-4 py-2 text-xl font-extrabold text-gray-800 lg:text-4xl'>
          環境商品、包装資材の
          <br />
          <span className='bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent'>
            大黒工業株式会社
          </span>
          ”非公式サイト”です
        </h1>
      </div>
    </div>
  );
};
