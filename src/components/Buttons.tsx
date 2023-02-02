import { FC, ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

export const BaseButton: FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className='rounded-lg bg-blue-500 px-10 py-4 text-xl font-bold text-white hover:bg-blue-700'
    >
      {children}
    </button>
  );
};

export const OutlineButton: FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className='rounded-lg border border-blue-600 px-10 py-4 text-xl font-bold text-blue-600 hover:bg-blue-600 hover:text-white'
    >
      {children}
    </button>
  );
};
