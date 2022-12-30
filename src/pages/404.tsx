import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';

const Custom404: NextPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-extrabold'>404</h1>
      <p className='text-2xl font-bold'>ページが見つかりませんでした。</p>
      <div className='mt-10 flex justify-center'>
        <div className='mx-2'>
          <Link href='/'>
            <button className='text-blue-500 bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white font-bold text-xl px-6 py-3 rounded outline-none ease-linear transition-all duration-150'>
              <span className='inline-flex mr-3'>
                <AiOutlineHome />
              </span>
              トップに戻る
            </button>
          </Link>
        </div>
        <div className='mx-2'>
          <Link href='/contact'>
            <button className='text-blue-500 bg-transparent border border-indigo-500 hover:bg-indigo-500 hover:text-white font-bold text-xl px-6 py-3 rounded outline-none ease-linear transition-all duration-150'>
              <span className='inline-flex mr-3'>
                <AiOutlineMail />
              </span>
              お問合せページ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
