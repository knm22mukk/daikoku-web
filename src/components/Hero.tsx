import Image from 'next/image';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className='relative flex justify-center items-center opacity-70'>
      <Image
        src='/images/moldimage1280x650.webp'
        width={1280}
        height={700}
        alt='モールドイメージ'
        className='object-cover'
      />
      <div className='absolute z-10 container flex justify-center items-center h-1/3'>
        <h1 className='text-gray-800 font-extrabold text-xl lg:text-4xl bg-white px-4 py-2 rounded-lg'>
          環境商品、包装資材の
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            大黒工業株式会社
          </span>
          ”非公式サイト”です
        </h1>
      </div>
    </div>
  );
};
