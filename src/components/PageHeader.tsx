import { FC } from 'react';

interface Props {
  subHeading: string;
  title: string;
}

export const PageHeader: FC<Props> = ({ subHeading, title }) => {
  return (
    <div className='py-8 flex items-center bg-gradient-to-r from-cyan-500 to-green-600'>
      <div className='container text-center text-white'>
        <span className='uppercase'>{subHeading}</span>
        <h1 className='text-2xl font-bold text-white text-center'>{title}</h1>
      </div>
    </div>
  );
};
