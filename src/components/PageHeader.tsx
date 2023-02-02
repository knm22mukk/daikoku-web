import { FC } from 'react';

interface Props {
  subHeading: string;
  title: string;
}

export const PageHeader: FC<Props> = ({ subHeading, title }) => {
  return (
    <div className='flex items-center bg-gradient-to-br from-green-400 to-blue-600 py-16'>
      <div className='container text-center text-white'>
        <span className='uppercase'>{subHeading}</span>
        <h1 className='text-center text-2xl font-bold text-white'>{title}</h1>
      </div>
    </div>
  );
};
