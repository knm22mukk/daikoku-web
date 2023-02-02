import { NextPage } from 'next';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';

const Custom404: NextPage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <h1 className='text-9xl font-extrabold'>404</h1>
      <p className='text-2xl font-bold'>ページが見つかりませんでした。</p>
      <div className='mt-10 flex justify-center'>
        <div className='mx-2'>
          <Link href='/'>
            <button className='rounded border border-indigo-500 bg-transparent px-6 py-3 text-xl font-bold text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-indigo-500 hover:text-white'>
              <span className='mr-3 inline-flex'>
                <AiOutlineHome />
              </span>
              トップに戻る
            </button>
          </Link>
        </div>
        <div className='mx-2'>
          <Link href='/contact'>
            <button className='rounded border border-indigo-500 bg-transparent px-6 py-3 text-xl font-bold text-blue-500 outline-none transition-all duration-150 ease-linear hover:bg-indigo-500 hover:text-white'>
              <span className='mr-3 inline-flex'>
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
