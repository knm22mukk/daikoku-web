import { FC, ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReturnTop } from '@/components/ReturnTop';

interface Props {
  children: ReactNode;
}

export const PageTemplete: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ReturnTop />
      <Footer />
    </>
  );
};
