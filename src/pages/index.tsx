import type { NextPage } from 'next';
import Footer from 'components/Footer';
import Header from 'components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className=''>大黒webはここから始まる。</h1>
      <Footer />
    </>
  );
};

export default Home;
