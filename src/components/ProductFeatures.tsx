import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import { BaseButton, OutlineButton } from '@/components/Buttons';

export const ProductFeatures: FC = () => {
  return (
    <section className='bg-white'>
      <div className='container max-w-7xl py-16'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500'>
              <MdOutlineProductionQuantityLimits className='h-10 w-10 text-white' />
            </div>
            <div className='mb-6 max-w-xl'>
              <h2 className='mb-6 max-w-lg text-2xl font-bold sm:text-3xl'>
                大黒工業では
                <br className='hidden md:block' />
                さまざまな商品を取り扱っています
              </h2>
              <p className='text-base md:text-lg'>
                おしぼりやナプキンなどをはじめとした紙製品、パルプモールドやFSC認証紙を使用した環境配慮型製品、マスクや手袋などの感染対策商品など幅広く取り扱いをしています。
              </p>
            </div>
            <div className='mt-4 flex justify-center space-x-3'>
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
                className='mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56'
              />
              <Image
                src='/images/moldimage1280x650.webp'
                height={300}
                width={300}
                alt='モールドイメージ'
                className='h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40'
              />
            </div>
            <div className='px-3'>
              <Image
                src='/images/moldimage1280x650.webp'
                height={300}
                width={300}
                alt='モールドイメージ'
                className='h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
