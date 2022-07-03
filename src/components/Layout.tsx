import { FC, ReactNode } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='text-gray-800 bg-gray-50'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
