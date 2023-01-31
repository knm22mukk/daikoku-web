import Image from 'next/image';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div className='flex justify-center opacity-70'>
      <Image
        src='/images/moldimage1280x650.webp'
        width={1280}
        height={7000}
        alt='モールドイメージ'
      />
    </div>
  );
};
