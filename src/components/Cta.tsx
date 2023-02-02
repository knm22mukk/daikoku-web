import { FC } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

export const Cta: FC = () => {
  return (
    <section className='my-16'>
      <div className='container max-w-7xl rounded-lg bg-gray-300 py-16'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            大黒工業はSNSでも発信します
          </h2>
          <p className='mx-auto mt-3 max-w-md text-base sm:text-lg md:mt-5 md:max-w-3xl md:text-xl'>
            イベントや新商品の情報、採用例などはSNSでも発信活動をしております。
            <br />
            是非、下記リンクからフォローをお願いいたします。
          </p>
          <div className='mt-8 flex flex-col items-center justify-center lg:flex-row'>
            <a
              href='https://www.instagram.com/daikoku1950_official/'
              target='_blank'
              rel='noreferrer'
              className='mr-2 mb-2 inline-flex max-w-[180px] items-center justify-center rounded-lg bg-[#f1224d] px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-[#f1224d]/90'
            >
              <AiOutlineInstagram className='mr-2 h-7 w-7' />
              Instagram
            </a>
            <a
              href='https://twitter.com/daikoku_office'
              target='_blank'
              rel='noreferrer'
              className='mr-2 mb-2 inline-flex max-w-[180px] items-center justify-center rounded-lg bg-[#1da1f2] px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-[#1da1f2]/90'
            >
              <AiOutlineTwitter className='mr-2 h-7 w-7' />
              Twitter
            </a>
            <a
              href='https://www.youtube.com/@daikoku_industry'
              target='_blank'
              rel='noreferrer'
              className='mr-2 mb-2 inline-flex max-w-[180px] items-center justify-center rounded-lg bg-[#FF0000] px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-[#FF0000]/90'
            >
              <AiOutlineYoutube className='mr-2 h-7 w-7' />
              Youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
