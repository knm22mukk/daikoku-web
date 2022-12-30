import { NextPage } from 'next';

import { PageTemplete } from '@/components/PageTemplete';

const Home: NextPage = () => {
  return (
    <PageTemplete>
      <div className='h-[2000px]'>
        <h1 className='text-red-500'>tailwindに変更しました</h1>
      </div>
    </PageTemplete>
  );
};

export default Home;
