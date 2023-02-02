import { FC } from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

export const Cta: FC = () => {
  return (
    <section className='my-16'>
      <div className='py-16 bg-gray-300 max-w-7xl container rounded-lg'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            大黒工業はSNSでも発信します
          </h2>
          <p className='max-w-md mx-auto mt-3 text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            イベントや新商品の情報、採用例などはSNSでも発信活動をしております。
            <br />
            是非、下記リンクからフォローをお願いいたします。
          </p>
          <div className='flex justify-center items-center flex-col lg:flex-row mt-8'>
            <a
              href='https://www.instagram.com/daikoku1950_official/'
              target='_blank'
              rel='noreferrer'
              className='max-w-[180px] justify-center text-white bg-[#f1224d] hover:bg-[#f1224d]/90 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
            >
              <AiOutlineInstagram className='mr-2 w-7 h-7' />
              Instagram
            </a>
            <a
              href='https://twitter.com/daikoku_office'
              target='_blank'
              rel='noreferrer'
              className='max-w-[180px] justify-center text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
            >
              <AiOutlineTwitter className='w-7 h-7 mr-2' />
              Twitter
            </a>
            <a
              href='https://www.youtube.com/@daikoku_industry'
              target='_blank'
              rel='noreferrer'
              className='max-w-[180px] justify-center text-white bg-[#FF0000] hover:bg-[#FF0000]/90 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
            >
              <AiOutlineYoutube className='mr-2 w-7 h-7' />
              Youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
