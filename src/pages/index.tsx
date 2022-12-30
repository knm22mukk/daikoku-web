import { NextPage } from 'next';

import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Header />
      <h1 className='text-red-500'>tailwindに変更しました</h1>
    </div>
  );
};

export default Home;
