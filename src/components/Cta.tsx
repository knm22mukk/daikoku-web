import { FC } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

import { BaseButton } from './Buttons';

export const Cta: FC = () => {
  return (
    <section className='my-8'>
      <div className='py-16 bg-gray-300 max-w-7xl container rounded-lg'>
        <div className='px-4 mx-auto text-center sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            大黒工業はSNSでも発信します
          </h2>
          <p className='max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            イベントや新商品の情報、採用例などはSNSでも発信活動をしております。
            <br />
            是非、下記リンクからフォローをお願いいたします。
          </p>
          <div className='flex justify-center mt-8 space-x-3'>
            <a
              href='https://www.instagram.com/daikoku1950_official/'
              target='_blank'
              rel='noreferrer'
            >
              <BaseButton type='button'>
                <AiOutlineInstagram className='mr-2 inline-flex w-7 h-7 items-center' />
                Instagram
              </BaseButton>
            </a>
            <a href='https://twitter.com/daikoku_office' target='_blank' rel='noreferrer'>
              <BaseButton type='button'>
                <AiOutlineTwitter className='mr-2 inline-flex w-7 h-7 items-center' />
                Twitter
              </BaseButton>
            </a>
            <a href='https://www.youtube.com/@daikoku_industry' target='_blank' rel='noreferrer'>
              <BaseButton type='button'>
                <AiOutlineYoutube className='mr-2 inline-flex w-7 h-7 items-center' />
                Youtube
              </BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
