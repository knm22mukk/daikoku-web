import { FC, ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReturnToTop } from '@/components/ReturntoTop';

interface Props {
  children: ReactNode;
}

export const PageTemplete: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ReturnToTop />
      <Footer />
    </>
  );
};
