import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { BaseButton, OutlineButton } from '@/components/Buttons';

export const ProductFeatures: FC = () => {
  return (
    <section className='bg-white'>
      <div className='py-16 container max-w-7xl'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500'>
              <MdOutlineProductionQuantityLimits className='w-10 h-10 text-white' />
            </div>
            <div className='max-w-xl mb-6'>
              <h2 className='max-w-lg mb-6 text-2xl font-bold sm:text-3xl'>
                大黒工業では
                <br className='hidden md:block' />
                さまざまな商品を取り扱っています
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                おしぼりやナプキンなどをはじめとした紙製品、パルプモールドやFSC認証紙を使用した環境配慮型製品、マスクや手袋などの感染対策商品など幅広く取り扱いをしています。
              </p>
            </div>
            <div className='flex justify-center mt-4 space-x-3'>
              <Link href='/product'>
                <BaseButton type='button'>商品一覧へ</BaseButton>
              </Link>
              <Link href='/catalog'>
                <OutlineButton type='button'>カタログ一覧へ</OutlineButton>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center lg:pl-8'>
            <div className='flex flex-col items-end px-3'>
              <Image
                src='/images/moldimage1280x650.webp'
                height={300}
                width={300}
                alt='モールドイメージ'
                className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
              />
              <Image
                src='/images/moldimage1280x650.webp'
                height={300}
                width={300}
                alt='モールドイメージ'
                className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
              />
            </div>
            <div className='px-3'>
              <Image
                src='/images/moldimage1280x650.webp'
                height={300}
                width={300}
                alt='モールドイメージ'
                className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
