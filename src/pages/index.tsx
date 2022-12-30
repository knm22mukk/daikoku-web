import { NextPage } from 'next';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Header />
      <h1 className='text-red-500'>tailwindに変更しました</h1>
      <Footer />
    </div>
  );
};

export default Home;
