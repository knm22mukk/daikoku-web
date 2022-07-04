import { NextPage } from 'next';
import Layout from 'components/Layout';
import SectionHeader from 'components/SectionHeader';

const index: NextPage = () => {
  return (
    <Layout>
      <SectionHeader subHeading='contact' title='お問合わせ' />
      <div className='container max-w-2xl'>
        <form className='flex flex-col mx-auto'>
          <label htmlFor='company' className='mt-8 mb-2 font-light text-gray-500'>
            会社名<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
            お名前<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
            お電話番号<span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
            メールアドレス<span className='text-red-500'>*</span>
          </label>
          <input
            type='email'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
            住所<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
          />
          <label htmlFor='name' className='mt-8 mb-2 font-light text-gray-500'>
            お問合せ内容<span className='text-red-500'>*</span>
          </label>
          <textarea
            className='py-1 px-3 w-full text-base leading-8 text-gray-700 focus:bg-white rounded border border-gray-300 focus:border-indigo-500 outline-none focus:ring-2 focus:ring-indigo-200 transition-colors duration-200 ease-in-out'
            rows={5}
          />
          <div className='py-8 text-center'>
            <button
              type='button'
              className='py-3 px-8 text-white bg-blue-600 rounded focus:outline-none disabled:opacity-25'
              disabled
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default index;
