import { FC, ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

export const BaseButton: FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className='text-white bg-blue-500 hover:bg-blue-700 font-bold rounded-lg text-xl px-10 py-4'
    >
      {children}
    </button>
  );
};

export const OutlineButton: FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className='text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 font-bold rounded-lg text-xl px-10 py-4'
    >
      {children}
    </button>
  );
};
