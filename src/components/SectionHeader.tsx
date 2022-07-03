import { FC } from 'react';

type Props = {
  subHeading: string;
  title: string;
};

const SectionHeader: FC<Props> = ({ subHeading, title }) => {
  return (
    <div className='py-8'>
      <div className='container flex flex-col items-center mx-auto'>
        <p className='mb-2 font-bold text-indigo-500'>{subHeading}</p>
        <h2 className='text-4xl font-black'>{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeader;
