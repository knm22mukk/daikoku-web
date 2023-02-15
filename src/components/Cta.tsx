import { FC } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

import { BaseButton } from './Buttons';

export const Cta: FC = () => {
  return (
    <section className='my-16 mx-4'>
      <div className='container max-w-7xl rounded-lg bg-gray-200 py-16'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            大黒工業はSNSでも発信します
          </h2>
          <p className='mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
            イベントや新商品の情報、採用例などはSNSでも発信活動をしております。
            <br />
            是非、下記リンクからフォローをお願いいたします。
          </p>
          <div className='mt-8 flex flex-col items-center justify-center gap-4 lg:flex-row'>
            <BaseButton type='button'>
              <a
                href='https://www.instagram.com/daikoku1950_official/'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineInstagram className='mr-2 inline-flex h-7 w-7' />
                Instagram
              </a>
            </BaseButton>
            <BaseButton type='button'>
              <a href='https://twitter.com/daikoku_office' target='_blank' rel='noreferrer'>
                <AiOutlineTwitter className='mr-2 inline-flex h-7 w-7' />
                Twitter
              </a>
            </BaseButton>
            <BaseButton type='button'>
              <a href='https://www.youtube.com/@daikoku_industry' target='_blank' rel='noreferrer'>
                <AiOutlineYoutube className='mr-2 inline-flex h-7 w-7' />
                Youtube
              </a>
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  );
};
